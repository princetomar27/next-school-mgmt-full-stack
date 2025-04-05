"use client";

import Image from "next/image";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Rectangle,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 34,
  },
  {
    name: "Tue",
    present: 65,
    absent: 35,
  },
  {
    name: "Wed",
    present: 89,
    absent: 11,
  },
  {
    name: "Thu",
    present: 78,
    absent: 12,
  },
  {
    name: "Fri",
    present: 98,
    absent: 2,
  },
  {
    name: "Sat",
    present: 95,
    absent: 5,
  },
  {
    name: "Sun",
    present: 34,
    absent: 90,
  },
];

const AttendanceChart = () => {
  return (
    <div className="h-full rounded-lg bg-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#ddd "
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              borderColor: "lightgray",
            }}
          />
          <Legend
            verticalAlign="top"
            align="left"
            wrapperStyle={{
              paddingTop: "20px",
              paddingBottom: "40px",
            }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>{" "}
    </div>
  );
};

export default AttendanceChart;
