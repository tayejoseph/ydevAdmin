import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppRoute } from '../../constants'
import { FloatingInput } from '../../UI'
import { UsersPallet } from '../../asset/convertedSvg'
import { getPrincipalOutStanding } from '../../store/action'
import { SectionHeader, TableContainer } from '../../components'
import { columns } from './tableData'
import Container from './styles'

const palletItems = [
  { title: 'Total Credit \n Disbursed', value: '5.5k' },
  { title: 'Open Loan \n Balance', value: '2.5k' },
  { title: 'Total Paid', value: '40' },
]

const CreditOutstanding = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { principalOutstandingLists } = useSelector((state) => state.adminData)

  useEffect(() => {
    dispatch(getPrincipalOutStanding())
  }, [dispatch])

  return (
    <Container>
      <SectionHeader
        title="Principal Outstanding"
        links={[
          { title: 'Credit', link: AppRoute.dashboard.credit.initial },
          {
            title: 'Principal Outstanding',
            link: AppRoute.dashboard.credit.outstanding,
          },
        ]}
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

      <div className="due--actions">
        <div className="input--row">
          <FloatingInput label="Start Date" type="date" />
          <FloatingInput label="End Date" type="date" />
        </div>
        <div className="check--group">
          <label>
            <input type="checkbox" />
            Include loans where system generated penalty is added between the
            above dates
          </label>
          <label>
            <input type="checkbox" />
            Include due loans with zero pending due amounts
          </label>
        </div>
      </div>

      <TableContainer
        {...{
          title: 'Principal Outstanding',
          columns,
          dataSource: principalOutstandingLists,
          onRow: (record, rowIndex) => {
            return {
              onClick: (event) => {
                history.push(
                  `${AppRoute.dashboard.users.initial}/${record.key}?tab=accounts`,
                )
              },
            }
          },
        }}
      />
    </Container>
  )
}

export default CreditOutstanding
