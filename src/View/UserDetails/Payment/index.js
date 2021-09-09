import React from 'react'
import { columns, dataSource } from './tableData'
import { TableContainer } from '../../../components'
import Container from './styles'

const Payment = () => {
  return (
    <Container>
      <TableContainer
        {...{
          title: 'Payments',
          columns,
          dataSource,
        }}
      />
    </Container>
  )
}

export default Payment
