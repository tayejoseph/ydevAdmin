import React, { useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { AppRoute } from '../../../constants'
import { TableContainer } from '../../../components'
import { columns, dataSource } from './tableData'
import { Button, InputGroup } from '../../../UI'
import Container from './styles'

const HireAlumni = () => {
  const history = useHistory()
  return (
    <Container>
      <TableContainer
        {...{
          title: '50 Response',
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

export default HireAlumni