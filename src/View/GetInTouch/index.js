import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getContacts, alterContacts } from '../../store/action'
import { AppRoute } from '../../constants'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { columns, dataSource } from './tableData'
import Container from './styles'

const Contacts = () => {
  const [loading, setLoading] = useState([])
  const { contactLists } = useSelector((s) => s.AppReducer)
  const dispatch = useDispatch()
  const history = useHistory()

  const palletItems = [
    {
      title: 'Total Contacts',
      value: contactLists ? contactLists.length : 0,
    },
  ]

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch])

  return (
    <Container>
      <SectionHeader title="Contacts" links={[]} />
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
          title: 'Contact Lists',
          columns: columns({
            loading,
            handleDeleteMentor: (row) => {
              setLoading((s) => [...s, row.id])
              dispatch(alterContacts(row, 'delete')).finally(() => {
                setLoading((s) => s.filter((item) => item !== row.id))
              })
            },
          }),
          loading: contactLists === '',
          dataSource: contactLists,
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

export default Contacts
