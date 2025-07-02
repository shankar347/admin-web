import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as BarTooltip,
  Legend as BarLegend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip as PieTooltip,
} from "recharts";

const STAGE_TYPE_COUNTS = {
  SR: 21,
  CR: 9,
  V: 2,
  P: 10,
  H: 12,
};

const STAGE_PREFIX_MAP = {
  SR: "Spawn Run",
  CR: "Case Run",
  P: "Pinning",
  V: "Venting",
  H: "Harvest",
};

const FIXED_COLORS = [
  "#FF5722", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3",
  "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFC107", "#FF9800",
  "#795548", "#607D8B", "#F44336", "#C62828", "#AD1457", "#6D4C41",
  "#FF1744", "#D32F2F", "#3CB371"
];

const getFixedColor = (index) => FIXED_COLORS[index % FIXED_COLORS.length];

const StageWiseCombinedChart = ({ stageWiseData, startDate, endDate }) => {
 console.log('stagewisedat',stageWiseData)
  const parseDate = (str) => {
    const [d, m, y] = str.split("/").map(Number);
    return new Date(y, m - 1, d);
  };

  const normalize = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const filteredDates = useMemo(() => {
    const start = normalize(new Date(startDate));
    const end = normalize(new Date(endDate));

    return Object.entries(stageWiseData)
      .filter(([dateStr]) => {
        const date = normalize(parseDate(dateStr));
        return date >= start && date <= end;
      })
      .sort(([a], [b]) => parseDate(a) - parseDate(b));
  }, [stageWiseData, startDate, endDate]);

  const allStages = useMemo(() => {
    const stageSet = new Set();
    filteredDates.forEach(([, stages]) => {
      Object.keys(stages).forEach((stage) => stageSet.add(stage));
    });
    return Array.from(stageSet).sort();
  }, [filteredDates]);

  const chartData = useMemo(() => {
    return filteredDates.map(([dateStr, stages]) => {
      const row = { date: dateStr };
      allStages.forEach((stage) => {
        row[stage] = stages[stage]?.length || 0;
        row[`${stage}_rooms`] = stages[stage]?.join(", ") || "Nil";
      });
      row.total = Object.values(stages).reduce((sum, rooms) => sum + rooms.length, 0);
      return row;
    });
  }, [filteredDates, allStages]);

  const stageColors = useMemo(() => {
    const colors = {};
    allStages.forEach((stage, idx) => {
      colors[stage] = getFixedColor(idx);
    });
    return colors;
  }, [allStages]);

  const pieChartData = useMemo(() => {
    const grouped = {};
    filteredDates.forEach(([, stageObj]) => {
      Object.entries(stageObj).forEach(([stage, rooms]) => {
        if (!grouped[stage]) grouped[stage] = [];
        grouped[stage].push(...rooms);
      });
    });

    return Object.entries(grouped).map(([stageName, rooms]) => ({
      name: stageName,
      value: rooms.length > 0 ? rooms.length : 1.5,
      displayValue: rooms.length,
      rooms,
    }));
  }, [filteredDates]);

  const pieColors = useMemo(() => {
    const colors = {};
    pieChartData.forEach((entry, idx) => {
      colors[entry.name] = entry.displayValue === 0 ? "#a9a9a9" : getFixedColor(idx);
    });
    return colors;
  }, [pieChartData]);

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
      {chartData.length === 0 ? (
        <p className="text-center text-gray-500">No data available</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          <h2 className="text-xl font-semibold mb-6 text-center">
            {(() => {
              const prefixes = new Set();
              allStages.forEach((stage) => {
                const prefix = stage.match(/^[A-Z]+/)?.[0];
                if (prefix) prefixes.add(prefix);
              });
              if (prefixes.size === 1) {
                const [prefix] = [...prefixes];
                return `${STAGE_PREFIX_MAP[prefix] || prefix} — from ${startDate} to ${endDate}`;
              } else {
                return `Mixed Stages — from ${startDate} to ${endDate}`;
              }
            })()}
          </h2>

          <div 
           style={{ display: 'flex',
           flexDirection:'column', justifyContent: 'center' }} >
            <ResponsiveContainer
              width="100%"
              height={ window.innerWidth < 640 ? 200  : Math.min(520 + pieChartData.length * 5, 2000) }
            >
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent, displayValue }) =>
                    displayValue > 1 ? `${name} (${Math.round(percent * 100)}%)` : null
                  }
                  outerRadius={window.innerWidth < 640 ? 45 : 120}
                  dataKey="value"
                  isAnimationActive={false}
                >
                  {pieChartData.map((entry) => (
                    <Cell
                      key={entry.name}
                      fill={pieColors[entry.name] || "#b0b0b0"}
                    />
                  ))}
                </Pie>
                <PieTooltip
                  formatter={(value, name, props) => {
                    const actual = props.payload?.displayValue ?? 0;
                    return actual === 0
                      ? "Nil"
                      : `Rooms: ${props.payload.rooms.join(", ")} | Total: ${actual}`;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <PieChartLegend
              payload={pieChartData.map((entry) => {
                const totalActual = pieChartData.reduce(
                  (acc, e) => acc + e.displayValue,
                  0
                );
                const percent =
                  entry.displayValue > 0
                    ? Math.round((entry.displayValue / totalActual) * 100)
                    : 0;
                return {
                  id: entry.name,
                  type: "square",
                  color: pieColors[entry.name],
                  label:
                    entry.displayValue > 0
                      ? `${entry.name} - (${percent}%) - Room: ${entry.rooms.join(", ")}`
                      : `${entry.name} - (0%) - Nil`,
                  roomCount: entry.displayValue,
                };
              })}
            />
          </div>

          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis
                label={{
                  value: "No of Rooms",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <BarTooltip
                content={({ active, payload, label }) => {
                  if (!active || !payload || payload.length === 0) return null;
                  const total = payload.reduce((sum, p) => sum + p.value, 0);
                  return (
                    <div className="bg-white p-2 rounded shadow text-sm">
                      <div className="font-semibold mb-1">Date: {label}</div>
                      {payload.map((p) => (
                        <div key={p.dataKey}>{`${p.dataKey}: Rooms: ${p.payload[`${p.dataKey}_rooms`]} | Total: ${p.value}`}</div>
                      ))}
                      <div className="font-bold mt-2">Total: {total} Room's</div>
                    </div>
                  );
                }}
              />
              <BarLegend />
              {allStages.map((stage) => (
                <Bar
                  key={stage}
                  dataKey={stage}
                  stackId="rooms"
                  fill={stageColors[stage]}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default StageWiseCombinedChart;

const PieChartLegend = ({ payload }) => {
  const totalRooms = payload.reduce((sum, entry) => sum + entry.roomCount, 0);
  return (
    <div
      style={{
        fontSize: "13px",
        margin: "auto",
        marginTop: "10px",
        width:  window.innerWidth < 640 ? "100%"  : "30%" ,
      }}
    >
      <div
        style={{
          display: "flex",
          fontWeight: "bold",
          paddingBottom: "6px",
          borderBottom: "1px solid #ccc",
          marginBottom: "8px",
        }}
      >
        <div style={{ flex: 3, wordWrap: "break-word" }}>Stage</div>
        <div style={{ flex: 1, textAlign: "right" }}>No of Rooms</div>
      </div>
      {payload.map((entry) => (
        <div
          key={entry.id}
          style={{ display: "flex", alignItems: "flex-start", marginBottom: "6px" }}
        >
          <div
            style={{
              flex: 3,
              display: "flex",
              alignItems: "flex-start",
              gap: "6px",
              wordBreak: "break-word",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                backgroundColor: entry.color,
                marginTop: 3,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                whiteSpace: "normal",
                wordWrap: "break-word",
                color: entry.color,
              }}
            >
              {entry.label}
            </span>
          </div>
          <div
            style={{
              flex: 1,
              textAlign: "right",
              fontWeight: entry.id === "Total" ? "bold" : "normal",
            }}
          >
            {entry.id === "Total" ? totalRooms : entry.roomCount}
          </div>
        </div>
      ))}
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #ccc",
          paddingTop: "6px",
          fontWeight: "bold",
          marginTop: "6px",
        }}
      >
        <div style={{ flex: 3 }}>Total</div>
        <div style={{ flex: 1, textAlign: "right" }}>{totalRooms}</div>
      </div>
    </div>
  );
};
