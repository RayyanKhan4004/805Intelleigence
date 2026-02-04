import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
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
        <pattern
          id="stripes"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(0)"
        >
          <line x1="0" y1="0" x2="0" y2="4" stroke="#655B96" strokeOpacity="0.3" strokeWidth="1" />

          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#314F4F" />
            <stop offset="100%" stopColor="#314F4F" stopOpacity={0.1} />
          </linearGradient>
        </pattern>
      </defs>
      {/* <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" /> */}
      {/* <XAxis dataKey="name" stroke="#655B96" axisLine={false} tickLine={false} />
      <YAxis width="auto" stroke="#655B96" axisLine={false} tickLine={false} /> */}
      <Tooltip cursor={{ fill: 'transparent' }} />
      <Bar dataKey="pv" stackId="a" fill="url(#gradient)" radius={[3, 3, 3, 3]} barSize={37} />
      <Bar dataKey="uv" stackId="a" fill="url(#stripes)" radius={[3, 3, 3, 3]} barSize={27} />
      {/* <RechartsDevtools /> */}
    </BarChart>
  )
}

export default StackedBarChart
