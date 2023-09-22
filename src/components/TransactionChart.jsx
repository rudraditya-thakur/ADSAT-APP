import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function TransactionChart({ coreData }) {
  // Filter and transform coreData into a format suitable for the BarChart
  const chartData = Object.keys(coreData)
    .filter((coreName) => coreName.startsWith('Core')) // Filter only the keys that start with "Core"
    .map((coreName) => ({
      name: coreName,
      Usage: typeof coreData[coreName] === 'string' ? parseFloat(coreData[coreName].replace('%', '')) : coreData[coreName],
    }));

  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Core Usage</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Usage" fill="#0ea5e9" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
