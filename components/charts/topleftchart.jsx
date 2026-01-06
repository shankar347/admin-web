import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Calendar, ChevronDown } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { getfilteredRoutes } from '~/store/orders/action'

const Topleftchart = () => {
  const [startdate, setStartdate] = useState('')
  const [enddate, setEnddate] = useState('')
  const [showPeriodDropdown, setShowPeriodDropdown] = useState(false)
  const [selectedPeriod, setSelectedPeriod] = useState('Last 7 days')
  const [isMobile, setIsMobile] = useState(false)
  const dispatch = useDispatch();
  const filtereddata = useSelector((state) => state.orders.filteredRoutes);

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    if (startdate && enddate) {
      dispatch(getfilteredRoutes({ startdate, enddate }));
    }
  }, [dispatch, startdate, enddate]);

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

  // Prepare line chart data from filtered data based on stops
  const prepareLineChartData = () => {
    if (!filtereddata.length) return []

    const dateMap = {}

    filtereddata.forEach(route => {
      const [datePart, timePart, meridian] = route.starttime.split(" ");
      const [day, month, year] = datePart.split("-");
      const dateStr = `${month}-${day}-${year} ${timePart} ${meridian}`;
      const date = new Date(dateStr);

      const dateKey = date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short'
      });

      if (!dateMap[dateKey]) {
        dateMap[dateKey] = { date: dateKey, attempts: 0, completed: 0 }
      }

      // Count stops as attempts and completed stops
      if (route.stops && Array.isArray(route.stops)) {
        route.stops.forEach(stop => {
          dateMap[dateKey].attempts += 1
          if (stop.iscompleted) {
            dateMap[dateKey].completed += 1
          }
        })
      }
    })

    return Object.values(dateMap).sort((a, b) => new Date(a.date) - new Date(b.date))
  }

  const lineChartData = prepareLineChartData()

  // Prepare pie chart data from filtered data based on stops
  const preparePieChartData = () => {
    if (!filtereddata.length) return [
      { name: 'Completed', value: 0, color: '#10b981' },
      { name: 'Pending', value: 0, color: '#f59e0b' },
      { name: 'Cancelled', value: 0, color: '#ef4444' }
    ]

    let totalCompleted = 0
    let totalPending = 0
    let totalCancelled = 0

    filtereddata.forEach(route => {
      if (route.stops && Array.isArray(route.stops)) {
        route.stops.forEach(stop => {
          if (stop.iscompleted && !stop?.iscancelled) {
            totalCompleted += 1
          } else if (stop.iscancelled && stop?.iscompleted) {
            totalCancelled += 1
          } else {
            totalPending += 1
          }
        })
      }
    })

    return [
      { name: 'Completed', value: totalCompleted, color: '#10b981' },
      { name: 'Pending', value: totalPending, color: '#f59e0b' },
      { name: 'Cancelled', value: totalCancelled, color: '#ef4444' }
    ].filter(item => item.value > 0) // Only show categories with data
  }

  const pieData = preparePieChartData()

  const periodOptions = ['Today', 'Last 7 days', 'Last 30 days', 'Last 90 days']

  // Function to set date range based on period selection
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

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "auto",
      width: '100%',
      backgroundColor: "#ffffff",
      borderRadius: isMobile ? "12px" : "16px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      border: "1px solid #e5e7eb",
      padding: isMobile ? "16px" : "22px"
    }}>
      {/* Header with Filters */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        marginBottom: isMobile ? '24px' : '40px',
        gap: isMobile ? '16px' : '0'
      }}>
        <h2 style={{
          fontSize: isMobile ? '20px' : '24px',
          fontWeight: '700',
          color: '#111827',
          margin: 0
        }}>
          Analytics Dashboard
        </h2>

        {/* Filter Controls */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: isMobile ? '10px' : '16px',
          width: isMobile ? '100%' : 'auto'
        }}>
          {/* Period Dropdown */}
          <div style={{
            position: 'relative',
            width: isMobile ? '100%' : 'auto'
          }}>
            <button
              onClick={() => setShowPeriodDropdown(!showPeriodDropdown)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '6px',
                padding: isMobile ? '8px 12px' : '10px 16px',
                fontSize: isMobile ? '13px' : '14px',
                fontWeight: '500',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                backgroundColor: 'white',
                cursor: 'pointer',
                outline: 'none',
                color: '#374151',
                transition: 'all 0.2s ease',
                width: isMobile ? '100%' : 'auto'
              }}
              onMouseEnter={(e) => e.target.style.borderColor = '#6366f1'}
              onMouseLeave={(e) => e.target.style.borderColor = '#d1d5db'}
            >
              <span>{selectedPeriod}</span>
              <ChevronDown style={{
                width: isMobile ? '14px' : '16px',
                height: isMobile ? '14px' : '16px',
                transform: showPeriodDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease'
              }} />
            </button>
            {showPeriodDropdown && (
              <div style={{
                position: 'absolute',
                right: isMobile ? '0' : 'auto',
                left: isMobile ? '0' : 'auto',
                marginTop: '6px',
                width: isMobile ? '100%' : '160px',
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
                zIndex: 10,
                overflow: 'hidden'
              }}>
                {periodOptions.map((option, index) => (
                  <button
                    key={option}
                    onClick={() => setPeriodDates(option)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: isMobile ? '10px 12px' : '12px 16px',
                      fontSize: isMobile ? '13px' : '14px',
                      fontWeight: '500',
                      backgroundColor: selectedPeriod === option ? '#f0f9ff' : 'transparent',
                      color: selectedPeriod === option ? '#0369a1' : '#374151',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = selectedPeriod === option ? '#f0f9ff' : '#f9fafb'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = selectedPeriod === option ? '#f0f9ff' : 'transparent'}
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
            alignItems: 'center',
            gap: isMobile ? '6px' : '12px',
            width: isMobile ? '100%' : 'auto'
          }}>
            <div style={{
              position: 'relative',
              flex: isMobile ? 1 : '0 1 auto',
              minWidth: isMobile ? '0' : '130px'
            }}>
              <input
                type="date"
                value={startdate}
                onChange={(e) => setStartdate(e.target.value)}
                style={{
                  paddingLeft: '2px',
                  paddingRight: isMobile ? '6px' : '12px',
                  paddingTop: isMobile ? '8px' : '10px',
                  paddingBottom: isMobile ? '8px' : '10px',
                  fontSize: isMobile ? '13px' : '14px',
                  fontWeight: '500',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  outline: 'none',
                  color: '#374151',
                  width: '100%',
                  minWidth: '0',
                  height: isMobile ? '36px' : 'auto'
                }}
              />

            </div>
            <span style={{
              color: '#6b7280',
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: '500',
              flexShrink: 0,
              padding: '0 2px'
            }}>to</span>
            <div style={{
              position: 'relative',
              flex: isMobile ? 1 : '0 1 auto',
              minWidth: isMobile ? '0' : '130px'
            }}>
              <input
                type="date"
                value={enddate}
                onChange={(e) => setEnddate(e.target.value)}
                style={{
                  paddingLeft: '2px',
                  paddingRight: isMobile ? '6px' : '12px',
                  paddingTop: isMobile ? '8px' : '10px',
                  paddingBottom: isMobile ? '8px' : '10px',
                  fontSize: isMobile ? '13px' : '14px',
                  fontWeight: '500',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  outline: 'none',
                  color: '#374151',
                  width: '100%',
                  minWidth: '0',
                  height: isMobile ? '36px' : 'auto'
                }}
              />

            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
        gap: isMobile ? '24px' : '32px'
      }}>
        {/* Line Chart */}
        <div style={{
          backgroundColor: 'white',
          padding: isMobile ? '16px' : '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #f1f5f9',
          minHeight: isMobile ? '400px' : 'auto'
        }}>
          <div style={{ marginBottom: isMobile ? '16px' : '24px' }}>
            <h3 style={{
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '4px',
              margin: 0
            }}>
              Order Performance
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              margin: 0
            }}>
              Daily Order attempts and completions
            </p>
          </div>
          <div style={{ height: isMobile ? '280px' : '320px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineChartData} margin={{
                top: 5,
                right: isMobile ? 10 : 30,
                left: isMobile ? 0 : 20,
                bottom: 5
              }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: isMobile ? 10 : 12 }}
                  height={isMobile ? 40 : 50}
                  interval={isMobile ? 'preserveStartEnd' : 0}
                  minTickGap={isMobile ? 5 : 0}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: isMobile ? 10 : 12 }}
                  width={isMobile ? 30 : 40}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    fontSize: isMobile ? '12px' : '14px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="attempts"
                  stroke="#6366f1"
                  strokeWidth={isMobile ? 2 : 3}
                  dot={{
                    fill: '#6366f1',
                    strokeWidth: isMobile ? 1 : 2,
                    r: isMobile ? 3 : 4
                  }}
                  activeDot={{ r: isMobile ? 5 : 6, fill: '#6366f1' }}
                />
                <Line
                  type="monotone"
                  dataKey="completed"
                  stroke="#10b981"
                  strokeWidth={isMobile ? 2 : 3}
                  dot={{
                    fill: '#10b981',
                    strokeWidth: isMobile ? 1 : 2,
                    r: isMobile ? 3 : 4
                  }}
                  activeDot={{ r: isMobile ? 5 : 6, fill: '#10b981' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: isMobile ? '16px' : '32px',
            marginTop: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#6366f1',
                flexShrink: 0
              }}></div>
              <span style={{
                fontSize: isMobile ? '12px' : '14px',
                color: '#6b7280',
                fontWeight: '500',
                whiteSpace: 'nowrap'
              }}>Total Orders</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                flexShrink: 0
              }}></div>
              <span style={{
                fontSize: isMobile ? '12px' : '14px',
                color: '#6b7280',
                fontWeight: '500',
                whiteSpace: 'nowrap'
              }}>Completed</span>
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div style={{
          backgroundColor: 'white',
          padding: isMobile ? '16px' : '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #f1f5f9'
        }}>
          <div style={{ marginBottom: isMobile ? '16px' : '24px' }}>
            <h3 style={{
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '4px',
              margin: 0
            }}>
              Order Status
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              margin: 0
            }}>
              Completion overview
            </p>
          </div>
          <div style={{
            height: isMobile ? '180px' : '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={isMobile ? 40 : 50}
                  outerRadius={isMobile ? 70 : 80}
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
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    fontSize: isMobile ? '12px' : '14px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '12px' : '16px',
            marginTop: isMobile ? '20px' : '24px'
          }}>
            {pieData.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '8px' : '12px'
                }}>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: item.color,
                    flexShrink: 0
                  }}></div>
                  <span style={{
                    fontSize: isMobile ? '13px' : '14px',
                    fontWeight: '500',
                    color: '#374151',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {item.name}
                  </span>
                </div>
                <span style={{
                  fontSize: isMobile ? '15px' : '16px',
                  fontWeight: '700',
                  color: '#111827',
                  flexShrink: 0
                }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topleftchart