import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import Container from './styles'

const data = [
  { name: 'Group A', value: 400, color: '#00C253' },
  { name: 'Group B', value: 300, color: '#FF9F43' },
]

const COLORS = ['00C253', '#FF9F43']

const CustomPieChart = ({ fillOne = '#1461DE', fillTwo = '#FF9F43' }) => {
  return (
    <Container>
      <div className="col--1">
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={85}
              outerRadius={110}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            />
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="action--group">
        <button data-color={COLORS[0]}>Male</button>
        <button data-color={COLORS[1]}>Female</button>
      </div>
    </Container>
  )
}

export default CustomPieChart
