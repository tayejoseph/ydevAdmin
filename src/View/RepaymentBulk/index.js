import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { AppRoute } from '../../constants'
import { Button, InputGroup } from '../../UI'
import { SectionHeader } from '../../components'
import Container from './styles'

const RepaymentBulk = () => {
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
        title="Add Bulk Repayments"
        links={[
          { title: 'Repayments', link: AppRoute.dashboard.repayment.initial },
          {
            title: 'Add Bulk Repayments',
            link: `${AppRoute.dashboard.repayment.bulk}`,
          },
        ]}
      />
      <form>
        <div className="input--row">
          <InputGroup
            label="Collection date"
            onChange={handleInput}
            name="collectionDate"
            type="date"
            value={formData.collectionDate}
          />
          <InputGroup
            label="Customer Name"
            onChange={handleInput}
            name="customerName"
            value={formData.customerName}
          />
        </div>
        <div className="input--row">
          <InputGroup
            label="Amount"
            type="number"
            onChange={handleInput}
            name="amount"
            value={formData.amount}
          />
          <InputGroup
            label="Method of repayment"
            onChange={handleInput}
            name="MethodOfRepayment"
            value={formData.MethodOfRepayment}
          />
        </div>
        <Button type="submit">Add repayment</Button>
      </form>
    </Container>
  )
}

export default RepaymentBulk
