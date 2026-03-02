import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'jun2021',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Dec2021',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'jun2021',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Dec2021',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'jun2021',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Dec2021',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'jun2021',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Dec2021',
    uv: 4490,
    pv: 4900,
    amt: 2400,
  },
  {
    name: 'jun2021',
    uv: 5490,
    pv: 4200,
    amt: 2000,
  },
  {
    name: 'Dec2021',
    uv: 6490,
    pv: 4100,
    amt: 2900,
  },
]

const CustomAreaChart = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
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
