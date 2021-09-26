import React from 'react'
import { useHistory } from 'react-router-dom'
import { AppRoute } from '../../../constants'
import { TableContainer } from '../../../components'
import { columns, dataSource } from './tableData'
import Container from './styles'

const UpcomingEvents = () => {
  const history = useHistory()
  return (
    <Container>
      <TableContainer
        {...{
          title: '50 Events',
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

export default UpcomingEvents
