import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'
import { AppRoute, schoolListMenu } from '../../constants'
import { InputGroup } from '../../UI'
import { UsersPallet } from '../../asset/convertedSvg'
import { toMoney } from '../../helpers'
import { SectionHeader, TableContainer } from '../../components'
import { columns } from './tableData'
import { getEarnings } from '../../store/action'
import Container from './styles'

const Payment = () => {
  const { paymentLists } = useSelector((state) => state.AppReducer)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(getEarnings())
  }, [dispatch])

  const palletItems = [
    {
      title: 'Total Earnings',
      value: toMoney(paymentLists?.total_earnings || 0, true),
    },
  ]

  return (
    <Switch>
      <Route path={AppRoute.dashboard.payment.inital} exact>
        <Container>
          <SectionHeader
            title="Earnings"
            links={[]}
            // children={
            //   <InputGroup>
            //     <select>
            //       {schoolListMenu.map((item) => (
            //         <option value={item.title} key={item.title}>
            //           {item.title}
            //         </option>
            //       ))}
            //     </select>
            //   </InputGroup>
            // }
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
              title: 'Earning Lists',
              columns,
              // hasDate: true,
              dataSource: paymentLists?.earnings,
              onRow: (record, rowIndex) => {
                return {
                  onClick: (event) => {
                    history.push(
                      `${AppRoute.dashboard.payment.initial}/${record.key}?tab=accounts`,
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

export default Payment
