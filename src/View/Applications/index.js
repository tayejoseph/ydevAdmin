import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getApplications, altApplication } from '../../store/action'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { columns } from './tableData'
import Container from './styles'

const Application = () => {
  const [loading, setLoading] = useState([])
  const { applications } = useSelector((s) => s.AppReducer)
  const dispatch = useDispatch()

  const palletItems = [
    {
      title: 'Total Applications',
      value: applications ? applications.length : 0,
    },
  ]

  useEffect(() => {
    dispatch(getApplications())
  }, [dispatch])

  return (
    <Container>
      <SectionHeader title="Applications" links={[]} />
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
          title: 'Applications Lists',
          columns: columns({
            loading,
            handleDeleteAlumini: (row) => {
              setLoading((s) => [...s, row.id])
              dispatch(altApplication(row, 'delete')).finally(() => {
                setLoading((s) => s.filter((item) => item !== row.id))
              })
            },
          }),
          dataSource: applications,
        }}
      />
    </Container>
  )
}

export default Application
