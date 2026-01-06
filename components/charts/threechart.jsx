import React, { useEffect, useState, useRef } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Calendar, ChevronDown, TrendingUp, Target, Clock, CheckCircle, Filter, MapPin, Zap, X, Menu, ChevronUp } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { getfilteredRoutes } from '~/store/orders/action'

const Topleftchart = ({ auth }) => {
  const [startdate, setStartdate] = useState('')
  const [enddate, setEnddate] = useState('')
  const [showPeriodDropdown, setShowPeriodDropdown] = useState(false)
  const [selectedPeriod, setSelectedPeriod] = useState('Last 7 days')
  const [loading, setLoading] = useState(false)
  const [showTimeDropdown, setShowTimeDropdown] = useState(false)
  const [showBranchDropdown, setShowBranchDropdown] = useState(false)
  const [selectedBranches, setSelectedBranches] = useState([])
  const [showSpeedDropdown, setShowSpeedDropdown] = useState(false)
  const [selectedSpeed, setSelectedSpeed] = useState('All')
  const [showStopDropdown, setShowStopDropdown] = useState(false)
  const [selectedStops, setSelectedStops] = useState([])
  const [timeRange, setTimeRange] = useState({ start: '', end: '' })
  const [selectedtime, setselectedtime] = useState('')
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [showChartLegend, setShowChartLegend] = useState(false)

  const dispatch = useDispatch()
  const filtereddata = useSelector((state) => state.orders.filteredRoutes)
  const dropdownRefs = useRef({})

  const timeRanges = [
    { label: "6 AM to 9 AM", value: "6:00-9:00" },
    { label: "9 AM to 12 PM", value: "09:00-12:00" },
    { label: "12 PM to 3 PM", value: "12:00-15:00" },
    { label: "3 PM to 6 PM", value: "15:00-18:00" },
  ]

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.values(dropdownRefs.current).forEach(ref => {
        if (ref && !ref.contains(event.target)) {
          const dropdownKey = Object.keys(dropdownRefs.current).find(
            key => dropdownRefs.current[key] === ref
          )
          if (dropdownKey) {
            switch (dropdownKey) {
              case 'period': setShowPeriodDropdown(false); break
              case 'branch': setShowBranchDropdown(false); break
              case 'speed': setShowSpeedDropdown(false); break
              case 'stop': setShowStopDropdown(false); break
              case 'time': setShowTimeDropdown(false); break
              default: break
            }
          }
        }
      })
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Set initial dates
  useEffect(() => {
    const today = new Date()
    const todayStr = today.toISOString().split('T')[0]
    let endStr = todayStr
    const week = new Date(today)
    week.setDate(today.getDate() - 7)
    let startStr = week.toISOString().split('T')[0]

    setStartdate(startStr)
    setEnddate(endStr)
  }, [])

  // Fetch data when dates change
  useEffect(() => {
    if (startdate && enddate) {
      dispatch(getfilteredRoutes({ startdate, enddate }))
    }
  }, [dispatch, startdate, enddate])

  // Helper functions
  const getBranches = () => {
    const branches = new Set()
    filtereddata.forEach(route => {
      if (route?.branch?.name) branches.add(route.branch.name)
    })
    return Array.from(branches)
  }

  const getStops = () => {
    const stops = new Set()
    filtereddata.forEach(route => {
      if (route.stops && Array.isArray(route.stops)) {
        route.stops.forEach(stop => {
          if (stop.name) stops.add(stop.name)
        })
      }
    })
    return Array.from(stops)
  }

  const getOrderSpeed = (stopTotalTime) => {
    if (!stopTotalTime) return "unknown"
    const timeInMinutes = parseInt(stopTotalTime.replace(" mins", ""))
    if (timeInMinutes <= 10) return "best"
    if (timeInMinutes <= 60) return "average"
    return "poor"
  }

  const applyFilters = (data) => {
    function timeToMinutes(t) {
      const [time, modifier] = t.split(' ')
      let [hours, minutes] = time.split(':').map(Number)
      if (modifier === 'PM' && hours !== 12) hours += 12
      if (modifier === 'AM' && hours === 12) hours = 0
      return hours * 60 + minutes
    }

    let filtered = [...data]

    // Branch filter
    if (selectedBranches.length > 0) {
      filtered = filtered.filter(route =>
        selectedBranches.includes(route.branch.name)
      )
    }

    // Speed filter
    if (selectedSpeed !== "All") {
      filtered = filtered.filter(route =>
        route.stops &&
        route.stops.some(stop =>
          getOrderSpeed(stop.totaltime) === selectedSpeed.toLowerCase()
        )
      )
    }

    // Stop filter
    if (selectedStops.length > 0) {
      filtered = filtered.filter(route =>
        route.stops && route.stops.some(stop => selectedStops.includes(stop.name))
      )
    }

    // Time filter
    const selectedRange = timeRanges.find(range => range.value === selectedtime)
    if (selectedRange) {
      const [startStr, endStr] = selectedRange.value.split('-')
      const startTotalMinutes = timeToMinutes(startStr.trim())
      const endTotalMinutes = timeToMinutes(endStr.trim())

      filtered = filtered.filter(route => {
        if (!route.starttime) return false
        const parts = route.starttime.split(" ")
        const timeString = parts.slice(1).join(" ")
        const routeStartMinutes = timeToMinutes(timeString)
        return routeStartMinutes >= startTotalMinutes && routeStartMinutes < endTotalMinutes
      })
    }

    return filtered
  }

  const prepareBarChartData = () => {
    const data = applyFilters(filtereddata)
    if (!data.length) return []

    const dateMap = {}
    data.forEach(route => {
      const [datePart, timePart, meridian] = route.starttime.split(" ")
      const [day, month, year] = datePart.split("-")
      const dateStr = `${month}-${day}-${year} ${timePart} ${meridian}`
      const date = new Date(dateStr)

      const dateKey = date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short'
      })

      if (!dateMap[dateKey]) {
        dateMap[dateKey] = { date: dateKey, attempts: 0, completed: 0, pending: 0, cancelled: 0 }
      }

      if (route.stops && Array.isArray(route.stops)) {
        route.stops.forEach(stop => {
          dateMap[dateKey].attempts += 1
          if (stop.iscompleted && !stop?.iscancelled) {
            dateMap[dateKey].completed += 1
          } else if (stop.iscancelled) {
            dateMap[dateKey].cancelled += 1
          } else {
            dateMap[dateKey].pending += 1
          }
        })
      }
    })

    return Object.values(dateMap).sort((a, b) => {
      const dateA = new Date(a.date + ' 2025')
      const dateB = new Date(b.date + ' 2025')
      return dateA - dateB
    })
  }

  const barChartData = prepareBarChartData()

  const preparePieChartData = () => {
    const data = applyFilters(filtereddata)
    if (!data.length) return [
      { name: 'Completed', value: 0, color: '#10b981' },
      { name: 'Pending', value: 0, color: '#f59e0b' },
      { name: 'Cancelled', value: 0, color: '#ef4444' }
    ]

    let totalCompleted = 0
    let totalPending = 0
    let totalCancelled = 0

    data.forEach(route => {
      if (route.stops && Array.isArray(route.stops)) {
        route.stops.forEach(stop => {
          if (stop.iscompleted && !stop?.iscancelled) {
            totalCompleted += 1
          } else if (stop.iscancelled) {
            totalCancelled += 1
          } else {
            totalPending += 1
          }
        })
      }
      if (route.iscanceled) {
        totalCancelled += 1
      }
    })

    return [
      { name: 'Completed', value: totalCompleted, color: '#10b981' },
      { name: 'Pending', value: totalPending, color: '#f59e0b' },
      { name: 'Cancelled', value: totalCancelled, color: '#ef4444' }
    ].filter(item => item.value > 0)
  }

  const pieData = preparePieChartData()

  const calculateStats = () => {
    const totalAttempts = pieData.reduce((sum, item) => sum + item.value, 0)
    const completed = pieData.find(item => item.name === 'Completed')?.value || 0
    const cancelled = pieData.find(item => item.name === 'Cancelled')?.value || 0
    const completionRate = totalAttempts > 0 ? Math.round((completed / totalAttempts) * 100) : 0
    const cancelledRate = totalAttempts > 0 ? Math.round((cancelled / totalAttempts) * 100) : 0

    return {
      totalAttempts,
      completed,
      cancelled,
      completionRate,
      cancelledRate,
      avgDaily: Math.round(totalAttempts / Math.max(barChartData.length, 1)),
      totalRoutes: applyFilters(filtereddata).length
    }
  }

  const stats = calculateStats()

  const periodOptions = ['Today', 'Last 7 days', 'Last 30 days', 'Last 90 days']
  const speedOptions = ['All', 'Best', 'Average', 'Poor']

  const setPeriodDates = (period) => {
    const today = new Date()
    const todayStr = today.toISOString().split('T')[0]
    let startStr = ''
    let endStr = todayStr

    switch (period) {
      case 'Today':
        startStr = todayStr
        endStr = todayStr
        break
      case 'Last 7 days':
        const week = new Date(today)
        week.setDate(today.getDate() - 7)
        startStr = week.toISOString().split('T')[0]
        break
      case 'Last 30 days':
        const month = new Date(today)
        month.setDate(today.getDate() - 30)
        startStr = month.toISOString().split('T')[0]
        break
      case 'Last 90 days':
        const quarter = new Date(today)
        quarter.setDate(today.getDate() - 90)
        startStr = quarter.toISOString().split('T')[0]
        break
      default:
        break
    }

    setStartdate(startStr)
    setEnddate(endStr)
    setSelectedPeriod(period)
    setShowPeriodDropdown(false)
  }

  const clearFilters = () => {
    setSelectedBranches([])
    setSelectedSpeed('All')
    setselectedtime('')
    setSelectedStops([])
    setTimeRange({ start: '', end: '' })
  }

  const toggleBranch = (branch) => {
    setSelectedBranches(prev =>
      prev.includes(branch)
        ? prev.filter(b => b !== branch)
        : [...prev, branch]
    )
  }

  const toggleStop = (stop) => {
    setSelectedStops(prev =>
      prev.includes(stop)
        ? prev.filter(s => s !== stop)
        : [...prev, stop]
    )
  }

  // Mobile-specific styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    width: '100%',
    backgroundColor: "#ffffff",
    borderRadius: isMobile ? "12px" : "0px",
    boxShadow: isMobile ? "0 4px 12px rgba(0, 0, 0, 0.05)" : "0 20px 50px rgba(0, 0, 0, 0.08)",
    border: "1px solid #e2e8f0",
    padding: isMobile ? "16px" : "40px",
    position: "relative",
    zIndex: 1,
    overflow: "hidden"
  }

  const buttonStyle = (active = false, activeColor = '#6366f1') => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: isMobile ? '10px 14px' : '14px 20px',
    fontSize: isMobile ? '13px' : '15px',
    fontWeight: '600',
    border: `2px solid ${active ? activeColor : '#e5e7eb'}`,
    borderRadius: '10px',
    backgroundColor: active ? (activeColor === '#6366f1' ? '#ede9fe' : activeColor === '#10b981' ? '#d1fae5' : activeColor === '#f59e0b' ? '#fef3c7' : '#dbeafe') : 'white',
    cursor: 'pointer',
    outline: 'none',
    color: active ? activeColor : '#374151',
    transition: 'all 0.3s ease',
    width: isMobile ? '100%' : 'auto',
    justifyContent: 'space-between'
  })

  const statCardStyle = (index) => ({
    backgroundColor: 'white',
    padding: isMobile ? '16px' : '28px',
    borderRadius: isMobile ? '12px' : '18px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    border: '2px solid #f3f4f6',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    minWidth: isMobile ? '140px' : '250px'
  })

  return (
    <div style={containerStyle}>
      {/* Subtle background elements */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }} />
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .stat-card {
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        @media (max-width: 768px) {
          .recharts-wrapper {
            font-size: 12px;
          }
          .recharts-cartesian-axis-tick-value {
            font-size: 10px;
          }
        }
      `}</style>

      {/* Header */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: isMobile ? '24px' : '40px',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          fontSize: isMobile ? "14px" : "16px",
          fontWeight: "600",
          color: "rgba(62, 22, 224, 1)",
          textAlign: "center",
        }}>
          Order Analytics
        </div>
        <div
          style={{
            width: "30px",
            height: "5px",
            backgroundColor: "#bfb719",
            borderRadius: "5px",
            margin: "auto",
            marginTop: "3px",
            marginBottom: isMobile ? "8px" : "15px",
          }}
        />

        {/* Mobile Filters Toggle */}
        {isMobile && (
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 16px',
              fontSize: '14px',
              fontWeight: '600',
              border: '2px solid #6366f1',
              borderRadius: '10px',
              backgroundColor: '#ede9fe',
              cursor: 'pointer',
              outline: 'none',
              color: '#6366f1',
              transition: 'all 0.3s ease',
              width: '100%',
              justifyContent: 'center',
              marginBottom: '16px'
            }}
          >
            <Filter style={{ width: '16px', height: '16px' }} />
            {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
            {showMobileFilters ? (
              <ChevronUp style={{ width: '16px', height: '16px' }} />
            ) : (
              <ChevronDown style={{ width: '16px', height: '16px' }} />
            )}
          </button>
        )}

        {/* Main Filter Controls */}
        <div style={{
          display: (!isMobile || showMobileFilters) ? 'flex' : 'none',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'stretch' : 'center',
          justifyContent: 'center',
          gap: isMobile ? '12px' : '20px',
          backgroundColor: '#f8fafc',
          padding: isMobile ? '16px' : '24px 32px',
          borderRadius: isMobile ? '12px' : '20px',
          border: '2px solid #e2e8f0',
          boxShadow: isMobile ? '0 2px 8px rgba(0, 0, 0, 0.05)' : '0 8px 25px rgba(0, 0, 0, 0.08)',
          marginBottom: isMobile ? '16px' : '24px',
          width: '100%'
        }}>
          {/* Period Dropdown */}
          <div style={{
            position: 'relative',
            width: isMobile ? '100%' : 'auto'
          }}>
            <button
              onClick={() => setShowPeriodDropdown(!showPeriodDropdown)}
              style={buttonStyle(selectedPeriod !== 'Last 7 days')}
            >
              {selectedPeriod}
              <ChevronDown style={{ width: isMobile ? '14px' : '18px', height: isMobile ? '14px' : '18px' }} />
            </button>
            {showPeriodDropdown && (
              <div
                ref={el => dropdownRefs.current.period = el}
                style={{
                  position: 'absolute',
                  top: isMobile ? 'auto' : '100%',
                  bottom: isMobile ? '100%' : 'auto',
                  left: '0',
                  marginTop: '8px',
                  width: isMobile ? '100%' : '180px',
                  backgroundColor: 'white',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
                  zIndex: 7000,
                }}
              >
                {periodOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setPeriodDates(option)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: isMobile ? '14px 16px' : '16px 20px',
                      fontSize: isMobile ? '13px' : '15px',
                      fontWeight: '600',
                      backgroundColor: selectedPeriod === option ? '#f3f4f6' : 'transparent',
                      color: selectedPeriod === option ? '#6366f1' : '#374151',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Date Range Inputs */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'center',
            gap: isMobile ? '12px' : '16px',
            width: isMobile ? '100%' : 'auto'
          }}>
            <div style={{ position: 'relative', width: isMobile ? '100%' : 'auto' }}>
              <input
                type="date"
                value={startdate}
                onChange={(e) => setStartdate(e.target.value)}
                style={{
                  paddingLeft: '48px',
                  paddingRight: '20px',
                  paddingTop: isMobile ? '12px' : '14px',
                  paddingBottom: isMobile ? '12px' : '14px',
                  fontSize: isMobile ? '13px' : '15px',
                  fontWeight: '600',
                  border: '2px solid #e5e7eb',
                  borderRadius: '10px',
                  backgroundColor: 'white',
                  outline: 'none',
                  color: '#374151',
                  width: '100%',
                  transition: 'all 0.3s ease'
                }}
              />
              <Calendar style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: isMobile ? '16px' : '20px',
                height: isMobile ? '16px' : '20px',
                color: '#6b7280'
              }} />
            </div>
            <span style={{
              color: '#6b7280',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: '600',
              textAlign: 'center'
            }}>to</span>
            <div style={{ position: 'relative', width: isMobile ? '100%' : 'auto' }}>
              <input
                type="date"
                value={enddate}
                onChange={(e) => setEnddate(e.target.value)}
                style={{
                  paddingLeft: '48px',
                  paddingRight: '20px',
                  paddingTop: isMobile ? '12px' : '14px',
                  paddingBottom: isMobile ? '12px' : '14px',
                  fontSize: isMobile ? '13px' : '15px',
                  fontWeight: '600',
                  border: '2px solid #e5e7eb',
                  borderRadius: '10px',
                  backgroundColor: 'white',
                  outline: 'none',
                  color: '#374151',
                  width: '100%',
                  transition: 'all 0.3s ease'
                }}
              />
              <Calendar style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: isMobile ? '16px' : '20px',
                height: isMobile ? '16px' : '20px',
                color: '#6b7280'
              }} />
            </div>
          </div>
        </div>

        {/* Additional Filters Row */}
        <div style={{
          display: (!isMobile || showMobileFilters) ? 'flex' : 'none',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'stretch',
          gap: isMobile ? '12px' : '16px',
          flexWrap: isMobile ? 'nowrap' : 'wrap',
          backgroundColor: '#f1f5f9',
          padding: isMobile ? '16px' : '20px 24px',
          borderRadius: isMobile ? '12px' : '16px',
          border: '2px solid #e2e8f0',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
          width: '100%'
        }}>
          {/* Branch Filter */}
          {auth.role === 'superadmin' && (
            <div style={{ position: 'relative', width: isMobile ? '100%' : 'auto' }}>
              <button
                onClick={() => setShowBranchDropdown(!showBranchDropdown)}
                style={buttonStyle(selectedBranches.length > 0, '#6366f1')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px' }} />
                  <span>Branch ({selectedBranches.length})</span>
                </div>
                <ChevronDown style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px' }} />
              </button>
              {showBranchDropdown && (
                <div
                  ref={el => dropdownRefs.current.branch = el}
                  style={{
                    position: 'absolute',
                    top: isMobile ? 'auto' : '100%',
                    bottom: isMobile ? '100%' : 'auto',
                    left: '0',
                    marginTop: '8px',
                    width: isMobile ? '100%' : '220px',
                    maxHeight: '200px',
                    overflow: 'auto',
                    backgroundColor: 'white',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
                    zIndex: 6000,
                  }}
                >
                  {getBranches().map((branch) => (
                    <button
                      key={branch}
                      onClick={() => toggleBranch(branch)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: isMobile ? '12px 14px' : '12px 16px',
                        fontSize: isMobile ? '13px' : '14px',
                        fontWeight: '600',
                        backgroundColor: selectedBranches.includes(branch) ? '#f3f4f6' : 'transparent',
                        color: selectedBranches.includes(branch) ? '#6366f1' : '#374151',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {branch}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Order Speed Filter */}
          <div style={{ position: 'relative', width: isMobile ? '100%' : 'auto' }}>
            <button
              onClick={() => setShowSpeedDropdown(!showSpeedDropdown)}
              style={buttonStyle(selectedSpeed !== 'All', '#10b981')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px' }} />
                <span>{selectedSpeed} Speed</span>
              </div>
              <ChevronDown style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px' }} />
            </button>
            {showSpeedDropdown && (
              <div
                ref={el => dropdownRefs.current.speed = el}
                style={{
                  position: 'absolute',
                  top: isMobile ? 'auto' : '100%',
                  bottom: isMobile ? '100%' : 'auto',
                  left: '0',
                  marginTop: '8px',
                  width: isMobile ? '100%' : '160px',
                  backgroundColor: 'white',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
                  zIndex: 6000,
                }}
              >
                {speedOptions.map((speed) => (
                  <button
                    key={speed}
                    onClick={() => {
                      setSelectedSpeed(speed)
                      setShowSpeedDropdown(false)
                    }}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: isMobile ? '12px 14px' : '12px 16px',
                      fontSize: isMobile ? '13px' : '14px',
                      fontWeight: '600',
                      backgroundColor: selectedSpeed === speed ? '#f3f4f6' : 'transparent',
                      color: selectedSpeed === speed ? '#10b981' : '#374151',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <span>{speed}</span>
                      {speed !== 'All' && (
                        <span style={{ fontSize: '11px', color: '#6b7280', fontWeight: '400' }}>
                          {speed === 'Best' && '≤10 mins'}
                          {speed === 'Average' && '10-60 mins'}
                          {speed === 'Poor' && '>60 mins'}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Stops Filter */}
          <div style={{ position: 'relative', width: isMobile ? '100%' : 'auto' }}>
            <button
              onClick={() => setShowStopDropdown(!showStopDropdown)}
              style={buttonStyle(selectedStops.length > 0, '#f59e0b')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px' }} />
                <span>Stops ({selectedStops.length})</span>
              </div>
              <ChevronDown style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px' }} />
            </button>
            {showStopDropdown && (
              <div
                ref={el => dropdownRefs.current.stop = el}
                style={{
                  position: 'absolute',
                  top: isMobile ? 'auto' : '100%',
                  bottom: isMobile ? '100%' : 'auto',
                  left: '0',
                  marginTop: '8px',
                  width: isMobile ? '100%' : '220px',
                  maxHeight: '200px',
                  overflow: 'auto',
                  backgroundColor: 'white',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
                  zIndex: 6000,
                }}
              >
                {getStops().map((stop) => (
                  <button
                    key={stop}
                    onClick={() => toggleStop(stop)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: isMobile ? '12px 14px' : '12px 16px',
                      fontSize: isMobile ? '13px' : '14px',
                      fontWeight: '600',
                      backgroundColor: selectedStops.includes(stop) ? '#f3f4f6' : 'transparent',
                      color: selectedStops.includes(stop) ? '#f59e0b' : '#374151',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {stop}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Time Range Filter */}
          <div style={{ position: 'relative', width: isMobile ? '100%' : 'auto' }}>
            <button
              onClick={() => setShowTimeDropdown(!showTimeDropdown)}
              style={buttonStyle(!!selectedtime, '#2563eb')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px' }} />
                <span>{selectedtime || "Select Time"}</span>
              </div>
              <ChevronDown style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px' }} />
            </button>
            {showTimeDropdown && (
              <div
                ref={el => dropdownRefs.current.time = el}
                style={{
                  position: 'absolute',
                  top: isMobile ? 'auto' : '100%',
                  bottom: isMobile ? '100%' : 'auto',
                  left: '0',
                  marginTop: '8px',
                  width: isMobile ? '100%' : '220px',
                  maxHeight: '200px',
                  overflow: 'auto',
                  backgroundColor: 'white',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
                  zIndex: 6000,
                }}
              >
                {timeRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => {
                      setselectedtime(range.value)
                      setShowTimeDropdown(false)
                    }}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: isMobile ? '12px 14px' : '12px 16px',
                      fontSize: isMobile ? '13px' : '14px',
                      fontWeight: '600',
                      backgroundColor: selectedtime === range.value ? '#e0f2fe' : 'transparent',
                      color: selectedtime === range.value ? '#2563eb' : '#374151',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Clear Filters Button */}
          {(selectedBranches.length > 0 || selectedSpeed !== 'All' || selectedStops.length > 0 || selectedtime) && (
            <button
              onClick={clearFilters}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: isMobile ? '10px 14px' : '8px 12px',
                fontSize: isMobile ? '13px' : '13px',
                fontWeight: '600',
                border: '2px solid #ef4444',
                borderRadius: '8px',
                backgroundColor: '#fee2e2',
                cursor: 'pointer',
                outline: 'none',
                color: '#ef4444',
                transition: 'all 0.3s ease',
                width: isMobile ? '100%' : 'auto'
              }}
            >
              <X style={{ width: isMobile ? '14px' : '14px', height: isMobile ? '14px' : '14px' }} />
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: isMobile ? '40px' : '60px',
          color: '#6b7280',
          fontSize: isMobile ? '16px' : '18px',
          fontWeight: '600'
        }}>
          Loading analytics data...
        </div>
      )}

      {/* No Data State */}
      {!loading && filtereddata.length === 0 && startdate && enddate && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: isMobile ? '40px' : '60px',
          color: '#6b7280',
          fontSize: isMobile ? '16px' : '18px',
          fontWeight: '600',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: isMobile ? '36px' : '48px', marginBottom: '16px' }}>📊</div>
          <div style={{ marginBottom: '8px' }}>No data found for the selected period</div>
          <div style={{ fontSize: isMobile ? '12px' : '14px', fontWeight: '400' }}>Try selecting a different date range</div>
        </div>
      )}

      {/* Data Content */}
      {!loading && filtereddata.length > 0 && (
        <>
          {/* Stats Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: isMobile ? '12px' : '24px',
              marginBottom: isMobile ? '24px' : '40px',
              position: 'relative',
              zIndex: 10,
            }}
          >
            {[
              { icon: Target, label: 'Total Orders', value: stats.totalAttempts, color: '#6366f1', bg: '#ede9fe' },
              { icon: CheckCircle, label: 'Completed', value: stats.completed, color: '#10b981', bg: '#d1fae5' },
              { icon: X, label: 'Cancelled', value: stats.cancelled, color: '#ef4444', bg: '#fee2e2' },
              { icon: TrendingUp, label: 'Success Rate', value: `${stats.completionRate}%`, color: '#f59e0b', bg: '#fef3c7' },
              { icon: X, label: 'Cancelled %', value: `${stats.cancelledRate}%`, color: '#ef4444', bg: '#fee2e2' },
              { icon: Clock, label: 'Total Routes', value: stats.totalRoutes, color: '#8b5cf6', bg: '#f3e8ff' }
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className="stat-card"
                  style={statCardStyle(index)}
                >
                  <div style={{
                    zIndex: 1000,
                    position: 'absolute',
                    top: isMobile ? '-10px' : '-15px',
                    right: isMobile ? '-10px' : '-15px',
                    width: isMobile ? '50px' : '70px',
                    height: isMobile ? '50px' : '70px',
                    backgroundColor: stat.bg,
                    borderRadius: '50%',
                    opacity: 0.8
                  }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <IconComponent style={{
                      width: isMobile ? '20px' : '28px',
                      height: isMobile ? '20px' : '28px',
                      color: stat.color,
                      marginBottom: isMobile ? '8px' : '16px'
                    }} />
                    <div style={{
                      fontSize: isMobile ? '18px' : '28px',
                      fontWeight: '800',
                      color: '#1f2937',
                      marginBottom: isMobile ? '4px' : '8px',
                      lineHeight: 1
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: isMobile ? '10px' : '13px',
                      fontWeight: '600',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Charts Row */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '24px' : '32px',
            position: 'relative',
            zIndex: 10
          }}>
            {/* Bar Chart */}
            <div style={{
              backgroundColor: 'white',
              padding: isMobile ? '16px' : '32px',
              borderRadius: isMobile ? '12px' : '20px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: '2px solid #f3f4f6',
              position: 'relative',
              overflow: 'hidden',
              flex: isMobile ? 'none' : 2
            }}>
              {!isMobile && (
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
                  borderRadius: '50%'
                }} />
              )}

              <div style={{ marginBottom: isMobile ? '16px' : '28px', position: 'relative', zIndex: 1 }}>
                <h3 style={{
                  fontSize: isMobile ? '16px' : '22px',
                  fontWeight: '700',
                  color: '#1f2937',
                  marginBottom: '4px',
                  margin: 0
                }}>
                  Order Performance
                </h3>
                <p style={{
                  fontSize: isMobile ? '12px' : '14px',
                  color: '#6b7280',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  Daily Order attempts and completions
                </p>
              </div>

              <div style={{ height: isMobile ? '250px' : '350px', position: 'relative', zIndex: 1 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barChartData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="date"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280', fontSize: isMobile ? 10 : 12, fontWeight: '600' }}
                      interval={isMobile ? 'preserveStartEnd' : 0}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280', fontSize: isMobile ? 10 : 12, fontWeight: '600' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        fontWeight: '600',
                        fontSize: isMobile ? '12px' : '14px'
                      }}
                    />
                    <Bar
                      dataKey="attempts"
                      fill="#6366f1"
                      radius={[4, 4, 0, 0]}
                      name="Total Orders"
                    />
                    <Bar
                      dataKey="completed"
                      fill="#10b981"
                      radius={[4, 4, 0, 0]}
                      name="Completed"
                    />
                    <Bar
                      dataKey="cancelled"
                      fill="#ef4444"
                      radius={[4, 4, 0, 0]}
                      name="Cancelled"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Chart Legend */}
              {isMobile ? (
                <button
                  onClick={() => setShowChartLegend(!showChartLegend)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    backgroundColor: '#f8fafc',
                    cursor: 'pointer',
                    outline: 'none',
                    color: '#374151',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    marginTop: '12px'
                  }}
                >
                  {showChartLegend ? 'Hide Legend' : 'Show Legend'}
                  <ChevronDown style={{
                    width: '12px',
                    height: '12px',
                    transform: showChartLegend ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }} />
                </button>
              ) : null}

              <div style={{
                display: isMobile ? (showChartLegend ? 'flex' : 'none') : 'flex',
                justifyContent: 'center',
                gap: isMobile ? '8px' : '24px',
                marginTop: isMobile ? '12px' : '20px',
                position: 'relative',
                zIndex: 1,
                flexWrap: 'wrap'
              }}>
                {[
                  { label: 'Total Orders', color: '#6366f1' },
                  { label: 'Completed', color: '#10b981' },
                  { label: 'Cancelled', color: '#ef4444' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: isMobile ? '6px 10px' : '8px 14px',
                      backgroundColor: '#f8fafc',
                      borderRadius: isMobile ? '6px' : '20px',
                      border: '2px solid #e5e7eb',
                      flex: isMobile ? '1 0 calc(50% - 8px)' : 'none'
                    }}
                  >
                    <div style={{
                      width: isMobile ? '10px' : '12px',
                      height: isMobile ? '10px' : '12px',
                      borderRadius: '4px',
                      backgroundColor: item.color
                    }}></div>
                    <span style={{
                      fontSize: isMobile ? '11px' : '13px',
                      color: '#374151',
                      fontWeight: '600',
                      whiteSpace: 'nowrap'
                    }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pie Chart */}
            <div style={{
              backgroundColor: 'white',
              padding: isMobile ? '16px' : '32px',
              borderRadius: isMobile ? '12px' : '20px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: '2px solid #f3f4f6',
              position: 'relative',
              overflow: 'hidden',
              flex: isMobile ? 'none' : 1
            }}>
              {!isMobile && (
                <div style={{
                  position: 'absolute',
                  bottom: '-40px',
                  left: '-40px',
                  width: '120px',
                  height: '120px',
                  background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
                  borderRadius: '50%'
                }} />
              )}

              <div style={{ marginBottom: isMobile ? '16px' : '28px', position: 'relative', zIndex: 1 }}>
                <h3 style={{
                  fontSize: isMobile ? '16px' : '22px',
                  fontWeight: '700',
                  color: '#1f2937',
                  marginBottom: '4px',
                  margin: 0
                }}>
                  Order Status
                </h3>
                <p style={{
                  fontSize: isMobile ? '12px' : '14px',
                  color: '#6b7280',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  Completion overview
                </p>
              </div>

              <div style={{
                height: isMobile ? '180px' : '240px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1
              }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={isMobile ? 30 : 50}
                      outerRadius={isMobile ? 70 : 90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        fontWeight: '600',
                        fontSize: isMobile ? '12px' : '14px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '8px' : '12px',
                marginTop: isMobile ? '16px' : '24px',
                position: 'relative',
                zIndex: 1
              }}>
                {pieData.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: isMobile ? '10px 12px' : '12px 16px',
                    backgroundColor: '#f8fafc',
                    borderRadius: isMobile ? '8px' : '12px',
                    border: '2px solid #e5e7eb',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px' }}>
                      <div style={{
                        width: isMobile ? '12px' : '14px',
                        height: isMobile ? '12px' : '14px',
                        borderRadius: '50%',
                        backgroundColor: item.color
                      }}></div>
                      <span style={{
                        fontSize: isMobile ? '12px' : '14px',
                        fontWeight: '600',
                        color: '#374151'
                      }}>
                        {item.name}
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: isMobile ? '6px' : '8px'
                    }}>
                      <span style={{
                        fontSize: isMobile ? '14px' : '16px',
                        fontWeight: '700',
                        color: '#1f2937'
                      }}>
                        {item.value}
                      </span>
                      <span style={{
                        fontSize: isMobile ? '10px' : '12px',
                        fontWeight: '600',
                        color: '#6b7280',
                        backgroundColor: '#e5e7eb',
                        padding: isMobile ? '2px 6px' : '2px 8px',
                        borderRadius: '6px'
                      }}>
                        {stats.totalAttempts > 0
                          ? Math.round((item.value / stats.totalAttempts) * 100)
                          : 0}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Topleftchart