import React, { useState, useMemo, useEffect } from "react";
import * as XLSX from "xlsx";
import { ArrowDownCircle, MapPin, Phone, User, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Modal,
  Select,
  Button,
  Table,
  message,
  Input,
  DatePicker,
  Checkbox,
  notification,
  Empty,
  Switch,
} from "antd";
import dayjs from "dayjs";
import DriverRepository from "~/repositories/DriverRepository";
import { MAP_API_KEY } from "~/helper/auth";
import moment from "moment";
import { FancyLoader } from "~/pages/assignroutes/airoutesassign";

const stopFields = [
  { key: "name", label: "Stop Name" },
  { key: "customer_name", label: "User Name" },
  { key: "customer_phoneno", label: "User Phone No" },
  { key: "payment_amount", label: "Payment Amount" },
  { key: "isPaid", label: "Is Paid" },
  { key: "customer_address", label: "User Address" },
];

function validateColumnMap(columnMap) {
  const requiredFields = ["customer_name", "customer_phoneno", "customer_address"];

  for (const field of requiredFields) {
    if (!columnMap[field] || columnMap[field] === "") {
      return false; // Missing field
    }
  }

  return true;
}

const SpreadsheetImportModal = ({
  visible,
  onClose,
  mode = "single",
  branches = [],
  drivers = [],
  auth,
  isMobile
}) => {
  const [excelData, setExcelData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [columnMap, setColumnMap] = useState({});
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedDriver, setSelectedDriver] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [routeName, setRouteName] = useState("");
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [routesList, setRoutesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadPercent, setLoadPercent] = useState(0);
  const [disabledOrders, setDisabledOrders] = useState([]);
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const [isAutoassining, setisautoassigning] = useState(false);
  const [previewDAta, setpreviewdata] = useState([]);
  const [routeSwapOpen, setRouteSwapOpen] = useState(false);
  const [tempDriverAreas, setTempDriverAreas] = useState([]);
  const [originalTempDriverAreas, setOriginalTempDriverAreas] = useState([]);
  const [draggedAreas, setDraggedAreas] = useState([]);
  const [dragSource, setDragSource] = useState(null);
  const [isAreadragged, setisAReadragged] = useState(false);
  const [ismergeAssigned, setismergeAssigned] = useState(false);
  const [usedcolumns, setisusedcolumns] = useState([])
  // New states for manual assignment toggle and swapping orders
  const [showManualAssign, setShowManualAssign] = useState(false);
  const [swapModalContext, setSwapModalContext] = useState({ open: false, fromRouteKey: null });
  const [swapSelectedOrders, setSwapSelectedOrders] = useState([]); // orders selected inside swap modal
  const [targetRouteForSwap, setTargetRouteForSwap] = useState(null);

  // Unassigned orders selection
  const [unassignedSelected, setUnassignedSelected] = useState([]);
  const [routeToAddUnassigned, setRouteToAddUnassigned] = useState(null);

  // Function to download Excel template
  const downloadTemplate = () => {
    // Create sample data for the template
    const templateData = [
      {
        "Stop Name": "Example Stop 1",
        "User Name": "John Doe",
        "User Phone No": "1234567890",
        "Payment Amount": "500",
        "Is Paid": "yes",
        "User Address": "123 Main St, Chennai 600001"
      },
      {
        "Stop Name": "Example Stop 2",
        "User Name": "Jane Smith",
        "User Phone No": "9876543210",
        "Payment Amount": "750",
        "Is Paid": "no",
        "User Address": "456 Park Ave, Chennai 600002"
      }
    ];

    // Create worksheet
    const ws = XLSX.utils.json_to_sheet(templateData);

    // Create workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Template");

    // Generate file name with timestamp
    const fileName = `route_template_${dayjs().format('YYYYMMDD_HHmmss')}.xlsx`;

    // Write and download
    XLSX.writeFile(wb, fileName);

    message.success("Template downloaded successfully!");
  };

  const handleDragStart = (driverId, areasArray) => {
    setDraggedAreas([...areasArray]); // clone to avoid reference issue
    setDragSource(driverId);
  };

  const handleDrop = (targetDriverId) => {
    if (!draggedAreas || !dragSource) return;

    setTempDriverAreas((prev) => {
      let copy = JSON.parse(JSON.stringify(prev));

      // SOURCE: Remove all areas
      const srcIndex = copy.findIndex((d) => d.driverId === dragSource);
      if (srcIndex !== -1) copy[srcIndex].areas = [];

      // TARGET: Append dragged areas
      const targetIndex = copy.findIndex((d) => d.driverId === targetDriverId);
      if (targetIndex !== -1) {
        copy[targetIndex].areas = [...copy[targetIndex].areas, ...draggedAreas];
      }

      return copy;
    });

    setDraggedAreas(null);
    setDragSource(null);
    setisAReadragged(true);
  };

  useEffect(() => {
    handleOpenRouteSwap();
  }, [drivers]);

  const handleOpenRouteSwap = () => {
    const mapped = drivers.map((d) => ({
      driverId: d._id,
      user_id: d.user_id,
      areas: [d.area?.name || ""],
    }));

    setTempDriverAreas(mapped);
    setOriginalTempDriverAreas(JSON.parse(JSON.stringify(mapped)));
  };

  const toggleExpand = (key) => {
    setExpandedRowKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  // Reset when modal closes
  useEffect(() => {
    if (!visible) {
      setExcelData([]);
      setColumns([]);
      setColumnMap({});
      setSelectedBranch("");
      setSelectedDriver("");
      setSelectedDate(null);
      setRouteName("");
      setSelectedOrders([]);
      setRoutesList([]);
      setDisabledOrders([]);
      setisautoassigning(false);
      setpreviewdata([]);
      setShowManualAssign(false);
    }
  }, [visible]);

  useEffect(() => {
    if (auth && auth.role !== "superadmin" && auth.branch) {
      setSelectedBranch(auth.branch);
    }
  }, [auth]);

  const filteredDrivers = useMemo(() => {
    if (!selectedBranch) return [];
    return drivers.filter((d) => d.branch?._id === selectedBranch);
  }, [selectedBranch, drivers]);

  const generateRouteName = () => {
    const now = dayjs();
    const branchCode = branches.find((b) => b._id === selectedBranch)?.name?.slice(0, 2) || "XX";
    const driverCode = filteredDrivers.find((d) => d._id === selectedDriver)?.username?.slice(0, 2) || "DR";
    return `R${now.format("DDMM")}${driverCode}${branchCode}`.toUpperCase();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      const headers = jsonData[0] || [];
      const rows = jsonData.slice(1).map((r) => Object.fromEntries(headers.map((h, i) => [h, r[i]])));

      const autoMap = {};
      stopFields.forEach((field) => {
        const match = headers.find((h) => h?.toString().toLowerCase().trim() === field.label.toLowerCase().trim());
        if (match) autoMap[field.key] = match;
      });

      setExcelData(rows);
      setColumns(headers);
      setColumnMap(autoMap);
      message.success("Spreadsheet loaded successfully!");
    };
    reader.readAsArrayBuffer(file);
  };

  const handleMappingChange = (fieldKey, col) => {
    setColumnMap((prev) => ({ ...prev, [fieldKey]: col }));
    setisusedcolumns((prev) => [...prev, col])
  };

  const handleSubmitSingle = async () => {
    if (!selectedBranch || !selectedDriver || !selectedDate) return message.warning("Please fill all required fields");

    if (!validateColumnMap(columnMap)) {
      message.error("Please map all required fields (Name, User Name, Phone No, Address)");
      return;
    }

    const mappedStops = excelData.map((row) => {
      const stop = {};
      for (const field of stopFields) {
        if (field.key === "isPaid") {
          const value = row[columnMap[field.key]] || "";
          if (typeof value === "string") {
            const lower = value.toLowerCase();
            if (lower === "yes") stop[field.key] = "yes";
            else if (lower === "no") stop[field.key] = "no";
            else stop[field.key] = value;
          } else stop[field.key] = value;
        } else {
          stop[field.key] = row[columnMap[field.key]] || "";
        }
      }
      return stop;
    });

    const finalRouteName = routeName.trim() || generateRouteName();
    const branchObj = branches.find((b) => b._id === selectedBranch);
    const driverObj = filteredDrivers.find((d) => d._id === selectedDriver);

    const routeData = {
      name: finalRouteName,
      branch: selectedBranch,
      branchcode: branchObj?.branchcode || "",
      driver: selectedDriver,
      drivername: driverObj?.username || "",
      date: selectedDate.format("YYYY-MM-DD"),
      stops: mappedStops,
    };

    try {
      setLoading(true);
      const result = await DriverRepository.createRoute(routeData);
      if (result?.status === 201) {
        message.success("Route created successfully!");
        onClose();
      } else {
        notification.error({ message: result?.message || "Failed to create route" });
      }
    } catch (err) {
      notification.error({ message: err.response?.data?.message || "Error creating route" });
    } finally {
      setLoading(false);
    }
  };

  const calcDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (v) => (v * Math.PI) / 180;
    const R = 6371; // km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  const handleAddRoute = () => {
    if (selectedOrders.length === 0) return message.warning("Please select at least one order");

    const newRoute = {
      id: Date.now().toString(),
      routeName: routeName.trim() || generateRouteName(),
      branch: selectedBranch,
      driver: selectedDriver,
      date: selectedDate,
      orders: excelData.filter((_, i) => selectedOrders.includes(i)),
    };

    setRoutesList((prev) => [...prev, newRoute]);
    setDisabledOrders((prev) => [...prev, ...selectedOrders]);
    setSelectedOrders([]);
    message.success("Route added!");
  };

  function extractPincode(address = "") {
    const match = address.match(/\b6\d{5}\b/); // Chennai pincodes
    return match ? match[0] : null;
  }

  async function getLatLong(address) {
    if (!address || address.trim() === "") return null;

    try {
      const formatted = encodeURIComponent(address);
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${formatted}&key=${MAP_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "OK") {
        const location = data.results[0].geometry.location;
        return { lat: location.lat, lng: location.lng };
      }
      return null;
    } catch (err) {
      console.error("getLatLong ERROR:", err);
      return null;
    }
  }

  async function findDriverForOrder(orderAddress, driversList, useTempAreas = false) {
    if (!orderAddress) return null;

    const lowerOrderAddr = orderAddress.toLowerCase();
    const orderLocation = await getLatLong(orderAddress);
    const orderPincode = extractPincode(orderAddress);

    if (useTempAreas) {
      let matches = [];

      for (let driver of tempDriverAreas) {
        for (let areaName of driver.areas) {
          const lowerArea = areaName.toLowerCase();
          let matchType = 0;
          let distance = Infinity;

          if (lowerOrderAddr.includes(lowerArea)) matchType = 3;

          const areaPincode = extractPincode(areaName);
          if (matchType === 0 && orderPincode && areaPincode) {
            if (orderPincode === areaPincode) matchType = 2;
          }

          if (matchType === 0 && orderLocation) {
            const areaLocation = await getLatLong(areaName);
            if (areaLocation) {
              distance = calcDistance(orderLocation.lat, orderLocation.lng, areaLocation.lat, areaLocation.lng);
              if (distance <= 3) matchType = 1;
            }
          }

          if (matchType > 0) matches.push({ driverId: driver.driverId, area: areaName, matchType, distance });
        }
      }

      return matches;
    }

    const ranked = [];

    for (const driver of driversList) {
      const areaName = driver.area?.name?.toLowerCase() || "";
      const areaAddr = driver.area?.address || "";
      const areaPincode = extractPincode(areaAddr);
      let matchType = 0;

      if (lowerOrderAddr.includes(areaName) && areaName.length > 0) matchType = 3;

      if (matchType === 0 && orderPincode && areaPincode) {
        if (orderPincode === areaPincode) matchType = 2;
      }

      let distance = Infinity;
      if (matchType === 0 && orderLocation) {
        const areaLocation = await getLatLong(areaAddr);
        if (areaLocation) {
          distance = calcDistance(orderLocation.lat, orderLocation.lng, areaLocation.lat, areaLocation.lng);
          if (distance <= 3) matchType = 1;
        }
      }

      if (matchType > 0) ranked.push({ driverId: driver._id, matchType, distance });
    }

    if (ranked.length === 0) return null;

    ranked.sort((a, b) => {
      if (b.matchType !== a.matchType) return b.matchType - a.matchType;
      return a.distance - b.distance;
    });

    return ranked[0].driverId;
  }

  async function autoAssignAndCreateRoutes(excelDataParam, driversList, columnMapParam, setRoutesListLocal) {
    if (!validateColumnMap(columnMapParam)) {
      message.error("Please map required fields (Name, User Name, Phone No, Address)");
      return;
    }

    const total = excelDataParam.length;
    let processed = 0;
    setLoading(true);
    setLoadPercent(0);

    const grouped = {};

    for (const row of excelDataParam) {
      const userAddress = row[columnMapParam["customer_address"]] || "";
      const result = await findDriverForOrder(userAddress, driversList, isAreadragged);

      if (Array.isArray(result)) {
        for (const match of result) {
          const { driverId, area } = match;
          if (!grouped[driverId]) grouped[driverId] = {};
          if (!grouped[driverId][area]) grouped[driverId][area] = [];
          grouped[driverId][area].push(row);
        }
      } else if (typeof result === "string") {
        const driverId = result;
        if (!grouped[driverId]) grouped[driverId] = {};
        if (!grouped[driverId]["default"]) grouped[driverId]["default"] = [];
        grouped[driverId]["default"].push(row);
      }

      processed++;
      setLoadPercent(Math.round((processed / total) * 100));
    }

    const finalRoutes = [];

    for (const driverId in grouped) {
      const driverAreas = grouped[driverId];
      const matchedDriver = driversList.find((d) => d._id === driverId);

      if (ismergeAssigned === true) {
        let allOrders = [];
        for (const areaName in driverAreas) allOrders = allOrders.concat(driverAreas[areaName]);

        const mergedRoute = {
          id: driverId + "-merged",
          routeName: `RT-${driverId.slice(-4)}-MERGE`,
          driver: driverId,
          branch: matchedDriver?.branch?._id || null,
          date: dayjs(),
          orders: allOrders.map((o, i) => ({
            name: o[columnMapParam["name"]] || `order ${i + 1}`,
            customer_name: o[columnMapParam["customer_name"]] || "",
            customer_phoneno: o[columnMapParam["customer_phoneno"]] || "",
            payment_amount: o[columnMapParam["payment_amount"]] || "0",
            isPaid: o[columnMapParam["isPaid"]] || "yes",
            customer_address: o[columnMapParam["customer_address"]] || "",
          })),
        };

        finalRoutes.push(mergedRoute);
        continue;
      }

      for (const areaName in driverAreas) {
        const orders = driverAreas[areaName];
        const route = {
          id: driverId + "-" + areaName,
          routeName: `RT-${driverId.slice(-4)}-${areaName.substring(0, 4)}`,
          driver: driverId,
          branch: matchedDriver?.branch?._id || null,
          date: dayjs(),
          orders: orders.map((o, i) => ({
            name: o[columnMapParam["name"]] || `order ${i + 1}`,
            customer_name: o[columnMapParam["customer_name"]] || "",
            customer_phoneno: o[columnMapParam["customer_phoneno"]] || "",
            payment_amount: o[columnMapParam["payment_amount"]] || "0",
            isPaid: o[columnMapParam["isPaid"]] || "yes",
            customer_address: o[columnMapParam["customer_address"]] || "",
          })),
        };

        finalRoutes.push(route);
      }
    }

    setRoutesList(finalRoutes);
    setisautoassigning(true);
    setLoadPercent(100);
    setLoading(false);
  }

  const handleCreateMultiRoutes = async () => {
    if (routesList.length === 0) return message.warning("Please add at least one route.");

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const haversineDistance = (a, b) => {
      const toRad = (v) => (v * Math.PI) / 180;
      const R = 6371;
      const dLat = toRad(b.lat - a.lat);
      const dLon = toRad(b.lng - a.lng);
      const lat1 = toRad(a.lat);
      const lat2 = toRad(b.lat);
      const aCalc =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
      return 2 * R * Math.asin(Math.sqrt(aCalc));
    };

    const sortStopsNearest = (stops, startPoint) => {
      const pending = [...stops];
      const sorted = [];
      let current = startPoint;

      while (pending.length > 0) {
        let nearestIndex = 0;
        let minDist = Infinity;

        for (let i = 0; i < pending.length; i++) {
          const dist = haversineDistance(current, pending[i]);
          if (dist < minDist) {
            minDist = dist;
            nearestIndex = i;
          }
        }

        const next = pending.splice(nearestIndex, 1)[0];
        sorted.push(next);
        current = next;
      }

      return sorted;
    };

    try {
      setLoading(true);
      setLoadPercent(0);
      const total = routesList.length;

      for (let i = 0; i < total; i++) {
        const r = routesList[i];

        let branchId = "";
        let branchCode = "";
        let branchCoords = { lat: 0, lng: 0 };
        let branchObj = null;

        // ---------------------------------------------------
        // SUPERADMIN → use branches array normally
        // NON-SUPERADMIN → force only auth branch
        // ---------------------------------------------------
        if (auth.role === "superadmin") {
          branchObj = branches.find((b) => b._id === r.branch);
          if (!branchObj) continue;

          branchId = branchObj._id;
          branchCode = branchObj.branchcode || "";
          branchCoords = {
            lat: Number(branchObj.lat),
            lng: Number(branchObj.lng),
          };
        } else {
          branchId = auth.branch; // logged-in user's branch
          branchCode = auth.branchname;
          branchCoords = {
            lat: Number(auth.branchlat),
            lng: Number(auth.branchlng),
          };
        }

        const driverObj = drivers.find((d) => d._id === r.driver);

        // ---------------------------------------------------
        // GEOCODE ALL STOPS
        // ---------------------------------------------------
        const stopsWithCoords = await Promise.all(
          r.orders.map(async (stop) => {
            const geo = await getLatLong(stop.customer_address);
            return {
              ...stop,
              lat: geo?.lat || branchCoords.lat,
              lng: geo?.lng || branchCoords.lng,
            };
          })
        );

        // ---------------------------------------------------
        // SHORTEST PATH ORDERING
        // ---------------------------------------------------
        const sortedStops = sortStopsNearest(stopsWithCoords, branchCoords);

        // ---------------------------------------------------
        // FORMAT STOP DATA
        // ---------------------------------------------------
        const mappedStops = sortedStops.map((stop) => ({
          name: stop.name || "",
          customer_name: stop.customer_name || "",
          customer_phoneno: stop.customer_phoneno || "",
          customer_address: stop.customer_address || "",
          isPaid: stop.isPaid === "yes" ? "yes" : "no",
          payment_amount: stop.payment_amount || 0,
          lat: stop.lat,
          lng: stop.lng,
        }));

        // ---------------------------------------------------
        // CREATE ROUTE PAYLOAD
        // ---------------------------------------------------
        const routeData = {
          name: r.routeName,
          branch: branchId,
          branchcode: branchCode,
          driver: r.driver,
          drivername: driverObj?.username || "",
          date: dayjs(r.date).format("YYYY-MM-DD"),
          stops: mappedStops,
        };

        const result = await DriverRepository.createRoute(routeData);

        if (result?.status === 201) {
          const progress = Math.round(((i + 1) / total) * 100);
          setLoadPercent(progress);
          await delay(300);
        } else {
          notification.error({ message: result?.message || "Failed to create route" });
        }
      }

      message.success("All routes created successfully!");
      onClose();

    } catch (err) {
      notification.error({ message: err.message || "Error creating routes" });
    } finally {
      setLoading(false);
      setTimeout(() => setLoadPercent(0), 700);
    }
  };

  const orderColumns = [
    {
      title: (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Checkbox
            checked={selectedOrders.length === excelData.length - disabledOrders.length}
            indeterminate={selectedOrders.length > 0 && selectedOrders.length < excelData.length - disabledOrders.length}
            onChange={(e) => {
              if (e.target.checked) {
                const enabled = excelData.map((_, i) => i).filter((i) => !disabledOrders.includes(i));
                setSelectedOrders(enabled);
              } else setSelectedOrders([]);
            }}
          />
        </div>
      ),
      dataIndex: "select",
      key: "select",
      width: window.innerWidth < 768 ? 40 : 60, // Smaller on mobile
      align: 'center',
      fixed: 'left',
      className: 'checkbox-column',
      render: (_, __, idx) => (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}>
          <Checkbox
            disabled={disabledOrders.includes(idx)}
            checked={selectedOrders.includes(idx)}
            onChange={(e) => {
              if (e.target.checked) setSelectedOrders((prev) => [...prev, idx]);
              else setSelectedOrders((prev) => prev.filter((i) => i !== idx));
            }}
            style={{
              transform: window.innerWidth < 768 ? 'scale(0.9)' : 'scale(1)'
            }}
          />
        </div>
      ),
    },
    ...columns.map((col, index) => {
      // Responsive width calculation
      const getResponsiveWidth = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 480) return 100; // Very small phones
        if (screenWidth < 768) return 120; // Phones
        if (screenWidth < 1024) return 140; // Tablets
        return 160; // Desktop
      };

      return {
        title: col,
        dataIndex: col,
        key: col,
        width: getResponsiveWidth(),
        ellipsis: {
          showTitle: true, // Show tooltip on hover
        },
        // Only fix first column after checkbox on mobile
        fixed: window.innerWidth < 768 && index === 0 ? 'left' : false,
        // Responsive cell renderer
        render: (text) => (
          <div
            title={text} // Show full text on hover
            style={{
              fontSize: window.innerWidth < 768 ? '12px' : '14px',
              lineHeight: '1.4',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {text}
          </div>
        ),
      };
    }),
  ];

  useEffect(() => {
    let previewData = excelData.map((row, i) => ({ key: i, ...row }));
    setpreviewdata(previewData);
  }, [excelData]);

  useEffect(() => {
    if (!isAutoassining) return;

    const assignedPhones = routesList.flatMap((route) => route.orders.map((o) => o.customer_phoneno));
    const filtered = previewDAta.filter((d) => !assignedPhones.includes(d.customer_phoneno));
    setpreviewdata(filtered);
  }, [isAutoassining, routesList]);

  // console.log(routesList, 'assi')
  // console.log(previewDAta, 'prev')
  // Compute unassigned orders dynamically
  const unassignedOrders = useMemo(() => {
    const assignedPhones = routesList.flatMap((r) => r.orders.map((o) => o.name));
    console.log(assignedPhones, 'assi')
    console.log(previewDAta, 'prev')
    return previewDAta.filter((d) =>
      !assignedPhones.includes(d.name)
    );
  }, [previewDAta, routesList]);

  // Swap modal actions
  const openSwapModalForRoute = (routeKey) => {
    setSwapModalContext({ open: true, fromRouteKey: routeKey });
    setSwapSelectedOrders([]);
    setTargetRouteForSwap(null);
    setRouteSwapOpen(true);
  };

  const closeSwapModal = () => {
    setSwapModalContext({ open: false, fromRouteKey: null });
    setSwapSelectedOrders([]);
    setTargetRouteForSwap(null);
    setRouteSwapOpen(false);
  };

  const undoRouteAreas = () => {
    setTempDriverAreas(JSON.parse(JSON.stringify(originalTempDriverAreas || [])));
    setisAReadragged(false);
    message.success("Route areas restored (undo)");
  };

  const performMoveSelectedOrders = () => {
    const fromKey = swapModalContext.fromRouteKey;
    const toKey = targetRouteForSwap;
    if (!fromKey || !toKey) return message.warning("Select source and target route");
    if (fromKey === toKey) return message.warning("Source and target are same");



    setRoutesList((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      const from = copy.find((r) => r.key === fromKey || r.id === fromKey);
      const to = copy.find((r) => r.key === toKey || r.id === toKey);
      if (!from || !to) return prev;
      console.log(swapSelectedOrders, 'swap')
      console.log(from, 'from')
      // Move items by customer_phoneno
      const toMovePhones = swapSelectedOrders.map((s) => s.name);
      const remaining = from.orders.filter((o) => !toMovePhones.includes(o.name));
      const moving = from.orders.filter((o) => toMovePhones.includes(o.name));
      console.log("SWAP SELECTED:", swapSelectedOrders.map(o => o.name));
      console.log("FROM ROUTE ORDERS:", from.orders.map(o => o.name));
      from.orders = remaining;
      to.orders = to.orders.concat(moving);

      message.success(`Moved ${moving.length} orders`);
      return copy;
    });

    // clear selection and close
    setSwapSelectedOrders([]);
    setTargetRouteForSwap(null);
    closeSwapModal();
  };

  // Add unassigned orders to an existing route
  const addUnassignedToRoute = (routeId) => {
    if (!routeId) return message.warning("Select a route to add to");
    if (unassignedSelected.length === 0) return message.warning("Select at least one order to add");

    setRoutesList((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      const route = copy.find((r) => r.id === routeId || r.key === routeId);
      if (!route) return prev;

      const moving = unassignedOrders.filter((u) => unassignedSelected.includes(u.key)).map((u) => ({
        name: u[columnMap["name"]] || "",
        customer_name: u[columnMap["customer_name"]] || "",
        customer_phoneno: u[columnMap["customer_phoneno"]] || "",
        payment_amount: u[columnMap["payment_amount"]] || 0,
        isPaid: u[columnMap["isPaid"]] || "yes",
        customer_address: u[columnMap["customer_address"]] || "",
      }));

      route.orders = route.orders.concat(moving);
      message.success(`Added ${moving.length} orders to ${route.routeName}`);
      return copy;
    });

    // reset selection
    setUnassignedSelected([]);
  };

  return (
    <Modal
      open={visible}
      onCancel={() => {
        onClose();
        setisautoassigning(false);
        setLoading(false);
        setisusedcolumns([])
      }}
      width={1000}
      title={`Import ${mode === "single" ? "Single Route" : "Multiple Routes"}`}
      footer={null}
    >
      {/* Download Template Button in Top Right */}
      <div style={{
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 1000
      }}>
        <Button
          type="primary"
          onClick={downloadTemplate}
          style={{
            backgroundColor: '#FF6B35', // Orange color
            borderColor: '#FF6B35',
            color: 'white',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            height: 'auto',
            borderRadius: '6px',
            boxShadow: '0 2px 8px rgba(255, 107, 53, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FF5722';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 107, 53, 0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FF6B35';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 107, 53, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <Download size={16} />
          Download Template
        </Button>
      </div>

      <div className="p-4" style={{ marginTop: '10px' }}>
        {/* Upload Excel */}
        {excelData.length <= 0 && (
          <div className="text-center mb-6">
            <label htmlFor="file-upload" className="inline-flex items-center justify-center px-5 py-3 rounded-lg cursor-pointer text-white" style={{ backgroundColor: "var(--jl-primary)", fontWeight: "600", transition: "0.3s" }}>
              Upload Excel / CSV
            </label>
            <input id="file-upload" type="file" accept=".xlsx,.xls,.csv" hidden onChange={handleFileUpload} />
          </div>
        )}

        {excelData.length > 0 && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="font-semibold mb-2">Preview & Column Mapping</h3>

              {/* Manual assign toggle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12 }}>Assign Manually</span>
                <Switch checked={showManualAssign} onChange={setShowManualAssign} />
              </div>
            </div>

            <Table dataSource={previewDAta.slice(0, 5)} columns={orderColumns.slice(1)} pagination={false} size="small" />

            {!isAutoassining && mode === 'multiple' && (
              <div style={{
                display: 'flex', flexDirection: 'column',
                width: '100%', alignItems: 'end', justifyContent: 'center', marginTop: '10px'
              }}>
                <Button style={{ height: 40, borderRadius: '10px' }} type="primary" onClick={() => setRouteSwapOpen(true)}>
                  Change Driver Route
                </Button>
                {
                  usedcolumns.length > 0 &&
                  <Button
                    style={{
                      height: 40,
                      marginTop: '10px',
                      borderRadius: '10px'
                    }} type="primary"
                    onClick={() => {
                      {
                        setisusedcolumns([])
                        setColumnMap({})
                      }
                    }}>
                    Remap Columns
                  </Button>
                }
              </div>
            )}

            {/* Mapping Fields */}
            <div style={{ marginTop: '20px', marginBottom: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              {stopFields.map((field) => (
                <div key={field.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                  <span style={{ width: '200px', fontWeight: '500', color: '#374151' }}>{field.label}</span>
                  <Select value={columnMap[field.key]}
                    style={{ width: '50%' }}
                    placeholder="Select column"
                    onChange={(v) => handleMappingChange(field.key, v)}
                    options={columns.filter((col) => !usedcolumns.includes(col)).map((col) => ({ label: col, value: col }))} />
                </div>
              ))}
            </div>

            {!isAutoassining && mode === 'multiple' && (
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Button style={{ width: 300, height: 50, borderRadius: '10px' }} onClick={() => autoAssignAndCreateRoutes(excelData, drivers, columnMap, setRoutesList)} type="primary">
                  Auto assign orders with drivers
                </Button>

              </div>
            )}

            {/* If manual assign is toggled ON show the manual form/table */}
            {showManualAssign && (
              <>
                <h3 className="font-semibold mb-3" style={{
                  marginTop: '20px',
                  overflowX: 'auto'
                }}>Manual Assignment — Select Orders</h3>
                <div style={{
                  width: '100%',
                  overflowX: 'auto',
                  border: '1px solid #f0f0f0',
                  borderRadius: 8
                }}>
                  <Table dataSource={previewDAta}
                    columns={orderColumns}

                    pagination={false} size="small" scroll={{ y: 300 }} />
                </div>
                <div className="mt-4 text-right">
                  <Button type="primary" disabled={selectedOrders.length === 0 || !selectedBranch || !selectedDriver || !selectedDate} onClick={handleAddRoute} style={{ backgroundColor: '#e53935', borderColor: '#e53935', color: 'white' }}>
                    Add Route
                  </Button>
                </div>

                {/* Form Inputs (visible in manual mode) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-4" style={{ marginTop: 12 }}>
                  <div className="flex flex-col">
                    <label className="font-medium mb-1">Select Branch</label>
                    <Select placeholder="Select Branch" value={selectedBranch} onChange={(v) => { if (auth.role === 'superadmin') { setSelectedBranch(v); setSelectedDriver(''); } }} options={auth.role === 'superadmin' ? branches.map((b) => ({ label: b.name, value: b._id })) : [{ label: auth.branchname, value: auth.branch }]} style={{ width: '100%' }} disabled={auth.role !== 'superadmin'} />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium mb-1">Select Driver</label>
                    {selectedBranch ? (filteredDrivers.length > 0 ? (
                      <Select placeholder="Select Driver" value={selectedDriver} onChange={setSelectedDriver} options={filteredDrivers.map((d) => ({ label: d.user_id, value: d._id }))} style={{ width: '100%' }} />
                    ) : (
                      <Empty description="No driver data" style={{ height: '30px' }} image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    )) : (
                      <Empty style={{ height: '30px' }} description="Select a branch first" image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium mb-1">Select Date</label>
                    <DatePicker style={{ width: '100%' }} value={selectedDate} onChange={setSelectedDate} />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium mb-1">Route Name</label>
                    <Input placeholder={`Optional - e.g., ${generateRouteName()}`} value={routeName} onChange={(e) => setRouteName(e.target.value)} />
                  </div>
                </div>
              </>
            )}

            {loading && <FancyLoader auth={auth} text={`${loadPercent}% completed`} />}

            {routesList.length > 0 && (
              <>
                <h3 className="font-semibold mt-5 mb-3">Created Routes Preview</h3>
                <div className="ai-route-table">
                  <Table
                    dataSource={routesList.map((r) => ({ key: r.id, id: r.id, routeName: r.routeName, branch: auth.branchname || branches.find((b) => b._id === r.branch)?.name, driver: drivers.find((d) => d._id === r.driver)?.user_id, date: r.date?.format ? r.date.format('YYYY-MM-DD') : r.date, orders: r.orders }))}
                    columns={[
                      { title: 'Route Name', dataIndex: 'routeName', align: 'center', },
                      { title: 'Branch', dataIndex: 'branch', align: 'center', },
                      { title: 'Driver', dataIndex: 'driver', align: 'center', },
                      { title: 'Date', dataIndex: 'date', align: 'center', },
                      {
                        title: 'Orders',
                        align: 'center',
                        render: (_, record) => (
                          <div

                          >
                            {mode === "multiple" ?
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column', gap: 8
                              }}>
                                <Button
                                  style={{
                                    background: auth.color,
                                    borderRadius: '8px',
                                    color: 'white',
                                    width: '135px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingBlock: '17px',
                                    height: '20px'
                                  }}
                                  type='primary'
                                  onClick={() => openSwapModalForRoute(record.key)}>
                                  Swap Orders
                                </Button>
                                <Button
                                  style={{
                                    background: auth.color,
                                    borderRadius: '8px',
                                    color: 'white',
                                    width: '135px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingBlock: '17px',
                                    height: '20px'
                                  }}
                                  type='primary'
                                  // onMouseEnter={(e)=>}

                                  onClick={() =>
                                    toggleExpand(record.key)}>
                                  {expandedRowKeys.includes(record.key) ? 'Hide Orders' : `View ${_.orders.length} Orders`}
                                </Button>

                              </div> : <Button
                                style={{
                                  background: auth.color,
                                  borderRadius: '8px',
                                  color: 'white',
                                  width: '135px',
                                  display: 'flex',
                                  margin: 'auto',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  paddingBlock: '17px',
                                  height: '20px'
                                }}
                                type='primary'
                              // onMouseEnter={(e)=>}

                              >
                                {_.orders.length} Orders
                              </Button>}
                          </div>
                        ),
                      },
                    ]}
                    expandable={{
                      expandedRowKeys,
                      expandIconColumnIndex: -1,
                      onExpand: (_, record) => toggleExpand(record.key),
                      expandedRowRender: (record) => (
                        <Table size="small" pagination={false}
                          dataSource={record.orders.map((o, i) => ({ key: i, name: o.name, customer_name: o.customer_name, customer_phoneno: o.customer_phoneno, payment_amount: o.payment_amount, isPaid: o.isPaid, customer_address: o.customer_address }))} columns={[{ title: 'Name', dataIndex: 'name' }, { title: 'User Name', dataIndex: 'customer_name' }, { title: 'Phone', dataIndex: 'customer_phoneno' }, { title: 'Amount', dataIndex: 'payment_amount' }, { title: 'Paid?', dataIndex: 'isPaid' }, { title: 'Address', dataIndex: 'customer_address' }]} />
                      ),
                    }}
                    pagination={false}
                    size="small"
                  />
                </div>

                {/* Unassigned orders table and controls */}



                {
                  mode === 'multiple' &&

                  <div style={{
                    marginTop: 20, width:
                      '100%', overflowX: 'auto'
                  }}>
                    <h4>Remaining Unassigned Orders</h4>

                    {/* Mobile-friendly table container */}
                    <div style={{
                      width: '100%',
                      overflowX: 'auto',
                      border: '1px solid #f0f0f0',
                      borderRadius: 8
                    }}>
                      <Table
                        dataSource={unassignedOrders}
                        pagination={false}
                        size="small"
                        columns={[
                          {
                            title: '',
                            dataIndex: 'select',
                            width: 50,
                            fixed: 'left',
                            render: (_, record) => (
                              <Checkbox
                                checked={unassignedSelected.includes(record.key)}
                                onChange={(e) => {
                                  if (e.target.checked) setUnassignedSelected((p) => [...p, record.key]);
                                  else setUnassignedSelected((p) => p.filter((k) => k !== record.key));
                                }}
                              />
                            )
                          },
                          ...columns.map((c) => ({
                            title: c,
                            dataIndex: c,
                            key: c,
                            ellipsis: true, // Show ellipsis for long text
                            width: 150 // Fixed width for better mobile scrolling
                          })),
                        ]}
                        style={{ minWidth: 600 }} // Minimum width for small screens
                      />
                    </div>

                    {/* Responsive controls */}
                    <div style={{
                      display: 'flex',
                      flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                      gap: 8,
                      marginTop: 8,
                      alignItems: 'stretch'
                    }}>
                      <Select
                        placeholder="Select route to add"
                        style={{
                          width: window.innerWidth < 768 ? '100%' : 240,
                          minWidth: 'unset'
                        }}
                        options={routesList.map((r) => ({ label: r.routeName, value: r.id }))}
                        value={routeToAddUnassigned}
                        onChange={setRouteToAddUnassigned}
                      />
                      <Button
                        onClick={() => addUnassignedToRoute(routeToAddUnassigned)}
                        type="primary"
                        style={{ width: window.innerWidth < 768 ? '100%' : 'auto' }}
                      >
                        Add Selected to Route
                      </Button>
                    </div>
                  </div>
                }

              </>
            )}

            {/* Footer Create Buttons */}
            <div className="text-right mt-6" style={{
              marginTop: isMobile ? '30px' : '10px'
            }}>
              {mode === 'single' ? (
                <Button type="primary" onClick={handleSubmitSingle} loading={loading} style={{ backgroundColor: '#e53935', borderColor: '#e53935' }}>Create Route</Button>
              ) : (
                <Button type="primary" onClick={handleCreateMultiRoutes} loading={loading} style={{ backgroundColor: '#e53935', borderColor: '#e53935' }}>Create All Routes</Button>
              )}
            </div>
          </>
        )}
      </div>

      <style>{`.ai-route-table .ant-table-expanded-row .ant-table { border: none !important; box-shadow: none !important; margin-left: -12px !important; }`}</style>

      {/* Route Swap / Move Orders Modal */}
      <Modal title="Change Driver Routes / Move Orders" open={routeSwapOpen} onCancel={() => { closeSwapModal(); }} footer={[
        <Button key="undo" onClick={undoRouteAreas}>Undo Area Changes</Button>,
        <Button key="close" onClick={() => { closeSwapModal(); }}>Close</Button>,
      ]} width={800}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* Show existing temporary driver areas with drag/drop */}
          {tempDriverAreas.map((row) => (
            <div key={row.driverId} onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop(row.driverId)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: `1px solid #e5e5e5`, borderRadius: '8px', background: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <User size={18} color={auth.color} />
                <b>{row.user_id}</b>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 13, color: '#555' }}>{row.areas.length > 0 ? row.areas.join(', ') : '(no area)'}</span>
                {row.areas.length > 0 && (
                  <div draggable onDragStart={() => handleDragStart(row.driverId, row.areas)} style={{ cursor: 'grab', padding: '6px 10px', border: `1px solid #e5e5e5`, borderRadius: '6px', background: '#f5f5f5' }}>
                    <ArrowDownCircle size={18} color={auth.color} />
                  </div>
                )}
              </div>
            </div>
          ))}

          <Checkbox checked={ismergeAssigned} onChange={(e) => setismergeAssigned(e.target.checked)}>Merge Assigned new Route with old Route</Checkbox>

          <hr />

          {/* Swap orders between created routes: show routes and their orders with checkboxes */}
          <h4>Move Orders Between Created Routes</h4>

          {routesList.length === 0 ? (
            <Empty description="No routes available to swap orders" />
          ) : (
            <>
              <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
                <Select placeholder="Select target route" style={{ minWidth: 260 }} options={routesList.map((r) => ({ label: r.routeName, value: r.id }))} value={targetRouteForSwap} onChange={setTargetRouteForSwap} />
                <Button type="primary" onClick={performMoveSelectedOrders} disabled={swapSelectedOrders.length === 0 || !targetRouteForSwap}>Move Selected Orders</Button>
              </div>

              <div style={{ maxHeight: 320, overflow: 'auto', border: '1px solid #f0f0f0', padding: 8, borderRadius: 6 }}>
                {routesList.map((r) => (
                  <div key={r.id} style={{ marginBottom: 10, padding: 8, border: '1px solid #eee', borderRadius: 6 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <b>{r.routeName}</b>
                      <span style={{ fontSize: 12 }}>{drivers.find((d) => d._id === r.driver)?.user_id}</span>
                    </div>

                    <div style={{ marginTop: 8 }}>
                      {r.orders.map((o, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 2px' }}>
                          <Checkbox checked={swapSelectedOrders.some((s) => s.customer_phoneno === o.customer_phoneno)} onChange={(e) => {
                            if (e.target.checked) setSwapSelectedOrders((p) => [...p, o]);
                            else setSwapSelectedOrders((p) => p.filter((s) => s.customer_phoneno !== o.customer_phoneno));
                          }} />
                          <div style={{ fontSize: 13 }}>
                            <User style={{
                              color: auth.color || "var(--theme-color)",
                              cursor: "pointer"
                            }} size={18} />   {o.customer_name} —
                          </div>
                          <div>


                            <Phone style={{
                              color: auth.color || "var(--theme-color)",
                              cursor: "pointer"
                            }} size={18} />   {o.customer_phoneno}  — </div>
                          <MapPin style={{
                            color: auth.color || "var(--theme-color)",
                            cursor: "pointer"
                          }} size={18} /> {o.customer_address}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </Modal>

    </Modal>
  );
};

export default SpreadsheetImportModal;