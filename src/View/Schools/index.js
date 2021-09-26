import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { AppRoute, schoolListMenu } from '../../constants'
import { InputGroup } from '../../UI'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { columns, dataSource } from './tableData'
import Container from './styles'

const palletItems = [
  { title: 'Total Response', value: '5.5k' },
  { title: 'All Earnings', value: '2.5k' },
  { title: 'Total Follow Up', value: '40' },
]


const Schools = () => {
  const history = useHistory()
  return (
    <Switch>
      <Route path={AppRoute.dashboard.repayment.inital} exact>
        <Container>
          <SectionHeader
            title="ActiveSchool"
            links={[]}
            children={
              <InputGroup>
              <select>
              {schoolListMenu.map((item) => (
                <option value = {item.title} key = {item.title}>{item.title}</option>
              ))}
              </select>
              </InputGroup>
            }
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

          <TableContainer
            {...{
              title: 'All Repayments',
              columns,
              dataSource,
              onRow: (record, rowIndex) => {
                return {
                  onClick: (event) => {
                    history.push(
                      `${AppRoute.dashboard.repayment.initial}/${record.key}?tab=accounts`,
                    )
                  },
                }
              },
            }}
          />
        </Container>
      </Route>
    </Switch>
  )
}

export default Schools
