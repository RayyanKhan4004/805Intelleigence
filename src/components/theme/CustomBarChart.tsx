import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
// import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// #endregion
interface StackedBarChartProps {
  data: any[]
  style?: React.CSSProperties
}

const StackedBarChart = ({
  data,
  style = { width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 },
}: StackedBarChartProps) => {
  return (
    <BarChart
      style={style}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgb(var(--color-primary))" />
          <stop offset="100%" stopColor="rgb(var(--color-primary))" stopOpacity={0.2} />
        </linearGradient>
      </defs>
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      {/* <XAxis dataKey="name" stroke="#655B96" />
      <YAxis width="auto" stroke="#655B96" /> */}
      <Tooltip />
      <Legend />
      {/* <Bar dataKey="pv" stackId="a" fill="#8884d8" background />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" background /> */}
      <Bar
        dataKey="pv"
        stackId="a"
        fill="#CBD5E1"
        // fill="url(#gradient)"/
        radius={[8, 8, 0, 0]}
        // background={{ fill: '#2D505033' }}
      />

      <Bar
        dataKey="uv"
        stackId="a"
        // fill="#CBD5E1"
        fill="url(#gradient)"
        // radius={[8, 8, 0, 0]}
        // background={{ fill: '#F1F5F9' }}
      />
      {/* <RechartsDevtools /> */}
    </BarChart>
  )
}

export default StackedBarChart

// "use client"

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts"

// interface BarConfig {
//   key: string
//   color: string
// }

// interface CustomBarChartProps {
//   data: any[]
//   xKey: string
//   bars: BarConfig[]
// }

// export function CustomBarChart({ data, xKey, bars }: CustomBarChartProps) {
//   return (
//     <div className="w-full h-[140px]">
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart data={data}>
//           {/* X Axis */}
//           <XAxis dataKey={xKey} hide />

//           {/* Y Axis */}
//           <YAxis hide />

//           {/* Tooltip */}
//           <Tooltip />

//           {/* ✅ Dynamic Bars */}
//           {bars.map((bar) => (
//             <Bar
//               key={bar.key}
//               dataKey={bar.key}
//               stackId="a"
//               fill={bar.color}
//               radius={[8, 8, 0, 0]}
//               background={{ fill: "#E5E7EB" }}
//             />
//           ))}
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   )
// }
// export default CustomBarChart;
