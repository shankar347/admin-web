'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const COLORS = ['#3182ce', '#38b2ac', '#ed8936', '#e53e3e', '#805ad5'];


function isValidChart(chart) {
  return (
    chart &&
    ['bar', 'pie', 'line'].includes(chart.type) &&
    Array.isArray(chart.labels) &&
    Array.isArray(chart.data) &&
    chart.labels.length === chart.data.length
  );
}


function ChartRenderer({ chart }) {
  if (!isValidChart(chart)) {
    return <pre className="text-red-500">❌ Invalid chart format</pre>;
  }

  const formattedData = chart.labels.map((label, index) => ({
    label,
    value: chart.data[index],
  }));

  if (!formattedData.length) {
    return <pre className="text-red-500">❌ No data to display</pre>;
  }

  return (
    <div style={{ width: '100%', height: 300 }} className="my-4">
      <ResponsiveContainer>
        {chart.type === 'bar' && (
          <BarChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3182ce" />
          </BarChart>
        )}

        {chart.type === 'line' && (
          <LineChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3182ce" />
          </LineChart>
        )}

        {chart.type === 'pie' && (
          <PieChart>
            <Tooltip />
            <Legend />
            <Pie
              data={formattedData}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {formattedData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}


export default function MarkdownViewer({ content }) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children }) {
            console.log('class', className);
            console.log('chldren', children);

            if (className?.startsWith('language-json')) {
              try {
                let raw = Array.isArray(children)
                  ? children.map(c => (typeof c === 'string' ? c : String(c))).join('')
                  : typeof children === 'string'
                  ? children
                  : String(children);

                raw = raw.trim();

               
                if (raw.endsWith('```')) raw = raw.slice(0, -3).trim();

                raw = raw.replace(/"typebar"/, `"type": "bar"`);

                const chart = JSON.parse(raw);

                return (
                  <div className="my-4" key={JSON.stringify(chart)}>
                    <ChartRenderer chart={chart} />
                  </div>
                );
              } catch (e) {
                console.error('❌ Chart parse error:', e);
                return <pre className="text-red-500">Loading ...</pre>;
              }
            }

            return <pre>{children}</pre>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
