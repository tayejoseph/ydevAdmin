import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'
import Container from './styles'

const data = [
  { name: 'Group A', value: 400, color: '#00C253' },
  { name: 'Group B', value: 300, color: '#FF9F43' },
]

const COLORS = ['#00C253', '#FF9F43']

const CustomPieChart = ({ fillOne = '#1461DE', fillTwo = '#FF9F43' }) => {
  return (
    <Container>
      <div className="col--1">
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <PieChart width={730} height={250}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={110}
              innerRadius={85}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
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
