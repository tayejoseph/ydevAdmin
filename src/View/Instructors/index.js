import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getInstructors, altInstructors } from '../../store/action'
import { AppRoute } from '../../constants'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { columns } from './tableData'
import Container from './styles'

const HigherEd = () => {
  const [loading, setLoading] = useState([])
  const { instructorsLists } = useSelector((s) => s.AppReducer)
  const dispatch = useDispatch()
  const history = useHistory()

  const palletItems = [
    {
      title: 'Total Instructors',
      value: instructorsLists ? instructorsLists.length : 0,
    },
  ]

  useEffect(() => {
    dispatch(getInstructors())
  }, [dispatch])

  return (
    <Container>
      <SectionHeader title="Instructors" links={[]} />
      <div className="pallet--grid__container">
        {palletItems.map((item) => (
          <div className="pallet--item">
            <h1>{item.value}</h1>
            <div>
              <p>{item.title}</p>
              <div>
                <UsersPallet />
              </div>
            </div>
          </div>
        ))}
      </div>

      <TableContainer
        {...{
          title: 'Instructors Lists',
          columns: columns({
            loading,
            handleDeleteAlumini: (row) => {
              setLoading((s) => [...s, row.id])
              dispatch(altInstructors(row, 'delete')).finally(() => {
                setLoading((s) => s.filter((item) => item !== row.id))
              })
            },
          }),
          dataSource: instructorsLists,
          onRow: (record, rowIndex) => {
            return {
              onClick: (event) => {
                history.push(`${AppRoute.dashboard.jobs.initial}/${record.key}`)
              },
            }
          },
        }}
      />
    </Container>
  )
}

export default HigherEd
