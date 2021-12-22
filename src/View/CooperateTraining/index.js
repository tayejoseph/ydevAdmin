import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  getCooperationTraining,
  alterCooperateTraining,
} from '../../store/action'
import { AppRoute } from '../../constants'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { columns } from './tableData'
import Container from './styles'

const CooperateTraining = () => {
  const [loading, setLoading] = useState([])
  const { trainingLists } = useSelector((s) => s.AppReducer)
  const dispatch = useDispatch()
  const history = useHistory()

  const palletItems = [
    {
      title: 'Total Corporate Trainings',
      value: trainingLists ? trainingLists.length : 0,
    },
  ]

  useEffect(() => {
    dispatch(getCooperationTraining())
  }, [dispatch])

  return (
    <Container>
      <SectionHeader title="Corporate Training" links={[]} />
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
          title: 'Corporate Training Lists',
          columns: columns({
            loading,
            handleDeleteAlumini: (row) => {
              setLoading((s) => [...s, row.id])
              dispatch(alterCooperateTraining(row, 'delete')).finally(() => {
                setLoading((s) => s.filter((item) => item !== row.id))
              })
            },
          }),
          dataSource: trainingLists,
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
