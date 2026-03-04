import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { chartData } from '../temp/temp.data'

const CustomAreaChart = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A4ABB1" stopOpacity={1} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
            </linearGradient>
          </defs>

          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="uv"
            stroke="#A4ABB1"
            fill="url(#colorUv)"
            strokeDasharray="4 4"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CustomAreaChart
