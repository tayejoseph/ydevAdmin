import React, { useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { AppRoute } from '../../../constants'
import { TableContainer } from '../../../components'
import { columns, dataSource } from './tableData'
import { Button, InputGroup } from '../../../UI'
import Container from './styles'

const General = () => {
  const history = useHistory()
  return (
    <Container>
      <TableContainer
        {...{
          title: 'Users',
          columns,
          dataSource,
          onRow: (record, rowIndex) => {
            return {
              onClick: (event) => {
                history.push(
                  `${AppRoute.dashboard.borrowers.initial}/${record.key}?tab=creditDetails`,
                )
              },
            }
          },
        }}
      />
    </Container>
  )
}

export default General
