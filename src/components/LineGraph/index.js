import React from 'react'
import {
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Line,
  Area,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts'

const monthlyEarnings = [...Array(30).keys()].map((item, index) => ({
  day: `oct${index}`,
  amount: Math.floor(Math.random() * 500),
}))

const earnings = [
  { month: 'jan', amount: 200 },
  { month: 'feb', amount: 100 },
  { month: 'march', amount: 200 },
  { month: 'april', amount: 50 },
  { month: 'may', amount: 10 },
  { month: 'june', amount: 60 },
  { month: 'july', amount: 60 },
]

const LineGraph = () => {
  return (
    <ResponsiveContainer width={'100%'} height="100%">
      <AreaChart
        data={earnings}
        // data={[...Array(10).keys()].map((item) => ({
        //   name: 'Aug',
        //   uv: item,
        //   pv: 2400,
        //   amt: 2400,
        // }))}
        margin={{ top: 20, right: 30, left: -20, bottom: 0 }}
      >
        {/* <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#109cf1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#109cf1" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#109cf1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#109cf1" stopOpacity={0} />
          </linearGradient>
        </defs> */}
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Area
          type="monotone"
          dataKey="amount"
          stroke="#109CF1"
          strokeWidth={5}
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default LineGraph
