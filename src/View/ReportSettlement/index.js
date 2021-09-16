import React, { useState } from 'react'
import { AppRoute } from '../../constants'
import { UsersPallet } from '../../asset/convertedSvg'
import { TableContainer } from '../../components'
import { useRouteMatch } from 'react-router-dom'
import { Button, InputGroup } from '../../UI'
import { SectionHeader } from '../../components'
import { columns, dataSource } from './tableData'
import Container from './styles'

const palletItems = [
  { title: 'Total Amount \n Settled', value: '5.5k' },
  { title: 'Last 7 Days \n Settlement', value: '2.5k' },
  { title: 'Last 30 Days \n Settlement', value: '40' },
]

const ReportSettlement = () => {
  const {
    params: { userId },
  } = useRouteMatch()
  const [formData, setFormDate] = useState({
    subject: '',
    userType: '',
  })

  const handleInput = ({ target: { name, value } }) => {
    setFormDate((s) => ({
      ...s,
      [name]: value,
    }))
  }

  return (
    <Container>
      <SectionHeader
        title="Settlement Report"
        links={[
          { title: 'Report', link: AppRoute.dashboard.reports.initial },
          {
            title: 'Settlement Report',
            link: `${AppRoute.dashboard.reports.settlement}`,
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
      <form>
        <section>
          <header>
            <h3>Date Range</h3>
          </header>
          <div className="content--container">
            <div className="date--range__container">
              <InputGroup type="date" required={true} />
              <p>to</p>
              <InputGroup type="date" required={true} />
            </div>
            <InputGroup />
            <div className="action__btn--group">
              <Button>Search</Button>
              <Button outlined>Reset</Button>
            </div>
          </div>
        </section>

        <section>
          <TableContainer
            {...{
              title: 'Settlement Report',
              columns,
              dataSource,
            }}
          />
        </section>
      </form>
    </Container>
  )
}

export default ReportSettlement
