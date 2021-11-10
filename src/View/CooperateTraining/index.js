import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getAlumini, alterAlumini } from '../../store/action'
import { AppRoute } from '../../constants'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { columns, dataSource } from './tableData'
import Container from './styles'

const CooperateTraining = () => {
  const [loading, setLoading] = useState([])
  const { aluminiLists } = useSelector((s) => s.AppReducer)
  const dispatch = useDispatch()
  const history = useHistory()

  const palletItems = [
    {
      title: 'Total Alumini',
      value: aluminiLists ? aluminiLists.length : 0,
    },
  ]

  useEffect(() => {
    dispatch(getAlumini())
  }, [dispatch])

  return (
    <Container>
      <SectionHeader title="Cooperate Training" links={[]} />
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
          title: 'Cooperate Training Lists',
          columns: columns({
            loading,
            handleDeleteAlumini: (row) => {
              setLoading((s) => [...s, row.id])
              dispatch(alterAlumini(row, 'delete')).finally(() => {
                setLoading((s) => s.filter((item) => item !== row.id))
              })
            },
          }),
          dataSource: aluminiLists,
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

export default CooperateTraining
