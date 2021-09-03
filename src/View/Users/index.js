import React from 'react'
import { Button } from '../../UI'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { columns, dataSource } from './tableData'
import Container from './styles'

const palletItems = [
  { title: 'Total Number of Users', value: '5.5k' },
  { title: 'Active Users', value: '5.5k' },
  { title: 'Banned users', value: '40' },
]

const Users = () => {
  return (
    <Container>
      <SectionHeader
        title="Users"
        links={[
          { title: 'Users', link: '' },
          { title: 'View Users', link: '' },
        ]}
        leftSection={<Button rounded>Add New User</Button>}
      />
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

      <TableContainer {...{ title: 'All Users', columns, dataSource }} />
    </Container>
  )
}

export default Users
