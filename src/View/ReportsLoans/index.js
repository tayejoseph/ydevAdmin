import React, { useState } from 'react'
import { AppRoute } from '../../constants'
import { TableContainer } from '../../components'
import { useRouteMatch } from 'react-router-dom'
import { Button, InputGroup } from '../../UI'
import { SectionHeader } from '../../components'
import { columns, dataSource } from './tableData'
import Container from './styles'

const ReportsLoans = () => {
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
        title="Loan Report"
        links={[
          { title: 'Report', link: AppRoute.dashboard.reports.initial },
          {
            title: 'Loan Report',
            link: `${AppRoute.dashboard.reports.loan}`,
          },
        ]}
      />
      <form>
        <section>
          <header>
            <h3>Select Report</h3>
          </header>
          <div className="content--container">
            <InputGroup>
              <select></select>
            </InputGroup>
            <div className="radio--row">
              <label>
                <input type="checkbox" />
                Show Due Loans row
              </label>
              <label>
                <input type="checkbox" />
                Show Payments row
              </label>
              <label>
                <input type="checkbox" />
                Show Net Due row
              </label>
            </div>
          </div>
        </section>
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
              columns,
              dataSource,
            }}
          />
        </section>
      </form>
    </Container>
  )
}

export default ReportsLoans
