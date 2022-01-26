import React from 'react'
import {
  linearGradient,
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Line,
  Area,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts'

const LineGraph = () => {
  return (
    <ResponsiveContainer width={'100%'} height="100%">
      <AreaChart
        data={[...Array(10).keys()].map((item) => ({
          name: 'Aug',
          // uv: item,
          // pv: 2400,
          amt: 2400,
        }))}
        margin={{ top: 20, right: 30, left: -20, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#109cf1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#109cf1" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#109cf1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#109cf1" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
        <ReferenceLine
          y={4000}
          label="Max"
          stroke="red"
          strokeDasharray="3 3"
        />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#109CF1"
          strokeWidth={8}
          fillOpacity={1}
          fill="url(#colorPv)"
        />

        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default LineGraph
