import React from 'react'
import {
  CartesianGrid,
  XAxis,
  Bar,
  ResponsiveContainer,
  BarChart,
} from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
  },
]

const LineGraph = ({ fillOne = '#1461DE', fillTwo = '#FF9F43' }) => {
  return (
    <ResponsiveContainer width={'100%'} height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Bar dataKey="pv" fill={fillOne} />
        <Bar dataKey="uv" fill={fillTwo} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default LineGraph
