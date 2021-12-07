import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getConsultation, alterConsultation } from '../../store/action'
import { AppRoute } from '../../constants'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { columns } from './tableData'
import Container from './styles'

const Consultation = () => {
  const [loading, setLoading] = useState([])
  const { consultationLists } = useSelector((s) => s.AppReducer)
  const dispatch = useDispatch()
  const history = useHistory()

  const palletItems = [
    {
      title: 'Total Alumini',
      value: consultationLists ? consultationLists.length : 0,
    },
  ]

  useEffect(() => {
    dispatch(getConsultation())
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
          title: 'Consultation Lists',
          columns: columns({
            loading,
            handleDeleteAlumini: (row) => {
              setLoading((s) => [...s, row.id])
              dispatch(alterConsultation(row, 'delete')).finally(() => {
                setLoading((s) => s.filter((item) => item !== row.id))
              })
            },
          }),
          dataSource: consultationLists,
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

export default Consultation
