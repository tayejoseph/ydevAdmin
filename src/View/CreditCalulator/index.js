import React, { useState } from 'react'
import { AppRoute } from '../../constants'
import { useRouteMatch } from 'react-router-dom'
import { Button, InputGroup } from '../../UI'
import { SectionHeader } from '../../components'
import Container from './styles'

const CreditCalulator = () => {
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
        title="Credit Calculator"
        links={[
          { title: 'Credit', link: AppRoute.dashboard.credit.initial },
          {
            title: 'Credit Compoments',
            link: `${AppRoute.dashboard.credit.calculator}`,
          },
        ]}
      />
      <form>
        <header>
          <h3>Select Plan</h3>
          <InputGroup>
            <select></select>
          </InputGroup>
        </header>
        <div className="section--container">
          <section>
            <h3>Principal</h3>
            <InputGroup
              label="Amount"
              type="number"
              name="amount"
              require
              value={formData.amount}
              onChange={handleInput}
            />
            <InputGroup
              label="Loan Release date"
              type="date"
              name="loanDate"
              value={formData.loanDate}
              onChange={handleInput}
            />
          </section>
          <section>
            <h3>Interest</h3>
            <InputGroup
              label="Interest Method"
              name="interestMethod"
              value={formData.interestMethod}
              onChange={handleInput}
            />
            <InputGroup
              label="Interest Type"
              name="interestType"
              value={formData.interestType}
              onChange={handleInput}
            />
            <InputGroup
              label="Loan Interest %"
              name="loanInterest"
              value={formData.loanInterest}
              onChange={handleInput}
            />
          </section>
          <section>
            <h3>Duration</h3>
            <InputGroup
              label="Amount"
              name="amount"
              type="number"
              value={formData.amount}
              onChange={handleInput}
            />
            <InputGroup
              label="Loan Release Date"
              name="loadReleaseDate"
              type="date"
              value={formData.loadReleaseDate}
              onChange={handleInput}
            />
          </section>
          <section>
            <h3>Repayments</h3>
            <InputGroup
              label="Repayment Cycle"
              name="repaymentCycle"
              type="number"
              value={formData.repaymentCycle}
              onChange={handleInput}
            />
            <InputGroup
              label="Number of repayments"
              name="noOfRepayment"
              type="number"
              value={formData.noOfRepayment}
              onChange={handleInput}
            />
          </section>
        </div>
        <Button type="submit">Calculate</Button>
      </form>
    </Container>
  )
}

export default CreditCalulator
