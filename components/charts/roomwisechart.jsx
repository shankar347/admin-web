import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const STAGE_TYPE_COUNTS = {
  SR: { start: 0, count: 21 },
  CR: { start: 0, count: 9 },
  V: { start: 0, count: 2 },
  P: { start: 0, count: 10 },
  H: { start: 1, count: 12 },
};

const STAGE_PREFIX_MAP = {
  SR: "Spawn Run",
  CR: "Case Run",
  P: "Pinning",
  V: "Venting",
  H: "Harvest",
};

const EMPTY_COLOR = "#a9a9a9";
const FIXED_COLORS = [
  "#FF5722", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3",
  "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFC107", "#FF9800",
  "#795548", "#607D8B", "#F44336", "#C62828", "#AD1457", "#6D4C41",
  "#FF1744", "#D32F2F"
];

const getFixedColor = (index) => FIXED_COLORS[index % FIXED_COLORS.length];

const StageRoomStackedBarChart = ({ data, selectedDate }) => {
  const stageTypesPresent = useMemo(() => {
    const types = new Set();
    data.forEach(({ stage }) => {
      const prefix = stage.match(/^[A-Z]+/)?.[0];
      if (prefix) types.add(prefix);
    });
    return Array.from(types);
  }, [data]);

  const isSingleStageType = stageTypesPresent.length === 1;

  const pieChartData = useMemo(() => {
    if (isSingleStageType) {
      const prefix = stageTypesPresent[0];
      const { start, count } = STAGE_TYPE_COUNTS[prefix] || { start: 0, count: 0 };
      const grouped = {};

      data.forEach(({ stage, roomName }) => {
        if (!grouped[stage]) grouped[stage] = [];
        grouped[stage].push(roomName);
      });

      const result = [];
      for (let i = start; i < start + count; i++) {
        const stageName = `${prefix}${i}`;
        const rooms = grouped[stageName] || [];
        result.push({
          name: stageName,
          value: rooms.length > 0 ? rooms.length : 0.15,
          displayValue: rooms.length,
          rooms,
        });
      }
      return result;
    } else {
      const grouped = {};
      const roomsPerType = {};

      data.forEach(({ stage, roomName }) => {
        const prefix = stage.match(/^[A-Z]+/)?.[0];
        if (!prefix) return;

        if (!grouped[prefix]) grouped[prefix] = new Set();
        grouped[prefix].add(stage);

        if (!roomsPerType[prefix]) roomsPerType[prefix] = new Set();
        if (roomName) roomsPerType[prefix].add(roomName);
      });

      return Object.keys(STAGE_TYPE_COUNTS)
        .map((type) => ({
          name: type,
          value: grouped[type]?.size || 0.2,
          displayValue: grouped[type]?.size || 0,
          rooms: Array.from(roomsPerType[type] || []),
        }))
        .filter((entry) => entry.displayValue > 0);
    }
  }, [data, stageTypesPresent, isSingleStageType]);

  const pieColors = useMemo(() => {
    const colorMap = {};
    pieChartData.forEach((entry, idx) => {
      colorMap[entry.name] =
        entry.displayValue === 0 ? EMPTY_COLOR : getFixedColor(idx);
    });
    return colorMap;
  }, [pieChartData]);

  const chartData = useMemo(() => {
    const stageMap = {};
    data.forEach(({ stage, roomName }) => {
      if (!stageMap[stage]) {
        stageMap[stage] = { stage };
      }
      stageMap[stage][roomName] = 1;
    });
    return Object.values(stageMap);
  }, [data]);

  const uniqueRooms = useMemo(() => {
    return Array.from(new Set(data.map((d) => d.roomName)));
  }, [data]);

  const roomColors = useMemo(() => {
    const colorMap = {};
    uniqueRooms.forEach((room, idx) => {
      colorMap[room] = getFixedColor(idx);
    });
    return colorMap;
  }, [uniqueRooms]);

const totalRooms = useMemo(() => {
  const allRooms = pieChartData.flatMap(entry => entry.rooms);
  const uniqueRoomSet = new Set(allRooms);
  return uniqueRoomSet.size;
}, [pieChartData]);

console.log('total',totalRooms)
  const totalPieValue = pieChartData.reduce((sum, entry) => {
    return entry.displayValue > 0 ? sum + entry.value : sum;
  }, 0);

  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
        marginTop: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        {
          isSingleStageType && STAGE_PREFIX_MAP[stageTypesPresent[0]]
            ? `${STAGE_PREFIX_MAP[stageTypesPresent[0]]} Room-wise Chart — ${selectedDate}`
            : `All Stage Room-wise Chart — ${selectedDate}`
        }
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ResponsiveContainer width="100%" 
        height={ window.innerWidth < 640 ? 450  : Math.min(520 + pieChartData.length * 27, 2000) }
        >
          <PieChart>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, displayValue }) =>
                displayValue > 0
                  ? `${name} (${Math.round((displayValue / totalPieValue) * 100)}%)`
                  : `${name} (Nil)`
              }
              outerRadius={window.innerWidth < 640 ? 42 : 120}
              dataKey="value"
              isAnimationActive={false}
            >
              {pieChartData.map((entry) => (
                <Cell key={entry.name} fill={pieColors[entry.name]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name, props) => {
                const rooms = props.payload?.rooms || [];
                return rooms.length > 0 ? 'Room: ' + rooms.join(", ") : "Nil";
              }}
            />
            <Legend
              verticalAlign="bottom"
              align="center"
              layout="vertical"
              content={
                <CustomLegend pieChartData={pieChartData} 
                pieColors={pieColors} totalRooms={totalRooms} />
              }
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {chartData.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888', marginTop: '20px' }}>
          No data for the selected date
        </p>
      ) : (
        <div style={{ marginTop: '30px' }}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData} 
            margin={{ top: 20, right: 10, left: -5, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" interval={0} angle={-45} 
              textAnchor="end" height={80} />
              <YAxis allowDecimals={false} label={{
                value: "(No of Rooms)",
                angle: -90,
                // position: "insideLeft",
                style: { textAnchor: "middle" }
                ,
              }} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length > 0) {
                    const stageName = label;
                    const roomEntries = payload.filter(p => p.value === 1);
                    const roomNames = roomEntries.map(p => `${p.dataKey}`).join(", ");
                    const total = roomEntries.length;

                    return (
                      <div style={{
                        background: '#fff',
                        border: '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '6px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}>
                        <p><strong>Stage:</strong> {stageName}</p>
                        <p>{roomNames ? `Room's: ${roomNames}` : "No Rooms"}</p>
                        <p><strong>Total:</strong> {total}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend />
              {uniqueRooms.map((room) => (
                <Bar key={room} dataKey={room} stackId="rooms" fill={roomColors[room]} />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default StageRoomStackedBarChart;

const CustomLegend = ({ pieChartData, pieColors, totalRooms }) => {
  return (
    <div style={{ fontSize: '13px', marginTop: '10px', width: '100%' }}>
      <div style={{
        display: 'flex',
        fontWeight: 'bold',
        paddingBottom: '6px',
        borderBottom: '1px solid #ccc',
        marginBottom: '8px'
      }}>
        <div style={{ flex: 3, wordWrap: 'break-word' }}>Stage</div>
        <div style={{ flex: 1, textAlign: 'right' }}>No of Rooms</div>
      </div>
      {pieChartData.map((entry) => (
        <div key={entry.name} style={{
          display: 'flex',
          alignItems: 'flex-start',
          marginBottom: '6px'
        }}>
          <div style={{
            flex: 3,
            display: 'flex',
            alignItems: 'flex-start',
            gap: '6px',
            wordBreak: 'break-word'
          }}>
            <div style={{
              width: 12,
              height: 12,
              backgroundColor: pieColors[entry.name],
              marginTop: 3,
              flexShrink: 0
            }} />
            <span style={{ color: pieColors[entry.name] }}>
              {entry.name} - {entry.rooms.length > 0 ? `Rooms: ${entry.rooms.join(", ")}` : "Nil"}
            </span>
          </div>
          <div style={{
            flex: 1,
            textAlign: 'right',
            fontWeight: 'normal'
          }}>
            {entry.rooms.length}
          </div>
        </div>
      ))}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        borderTop: '1px solid #ccc',
        paddingTop: '6px',
        marginTop: '10px'
      }}>
        <div>Total</div>
        <div>{totalRooms}</div>
      </div>
    </div>
  );
};
