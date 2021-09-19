import React, { useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { formValidator, scrollDashboardToTop } from '../../helpers'
import { AppRoute } from '../../constants'
import { Button, InputGroup } from '../../UI'
import { altPlans } from '../../store/action'
import { SectionHeader } from '../../components'
import Container from './styles'

const PlansAlt = () => {
  const {
    params: { planId },
  } = useRouteMatch()
  const history = useHistory()
  const dispatch = useDispatch()
  const { planLists } = useSelector((state) => state.adminData)
  const [loading, setLoading] = useState(false)

  const [formData, setFormDate] = useState(() =>
    planId !== 'new' && planLists
      ? planLists.find((item) => Number(item.id) === Number(planId))
      : {
          subject: '',
          userType: '',
        },
  )

  const handleInput = ({ target: { name, value } }) => {
    setFormDate((s) => ({
      ...s,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    if (
      formValidator(document.forms['plans--form'].getElementsByTagName('input'))
    ) {
      setLoading(true)
      try {
        const response = await dispatch(
          altPlans(formData, planId === 'new' ? 'add' : 'edit'),
        )
        console.log(response, 'sjdksdkj')
        if (response && response.success) {
          history.goBack()
        }
      } finally {
        setLoading(false)
      }
    } else {
      scrollDashboardToTop()
    }
  }

  return (
    <Container>
      <SectionHeader
        title={planId !== 'new' ? 'Edit Plan' : 'Add New Plan'}
        links={[
          { title: 'Plans', link: AppRoute.dashboard.plans.initial },
          {
            title: planId !== 'new' ? 'Edit Plan' : 'Add New Plan',
            link: `${AppRoute.dashboard.plans.initial}/${planId}`,
          },
        ]}
      />
      <form
        name="plans--form"
        noValidate
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <div className="section--container">
          <section>
            <h3>Principal</h3>
            <InputGroup
              label="Plan Name"
              name="name"
              data-label="Plan Name"
              required
              value={formData.name}
              onChange={handleInput}
            />
            <InputGroup
              label="Amount"
              type="number"
              name="amount"
              data-label="Amount"
              required
              value={formData.amount}
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
        <Button type="submit" spinnerWithTxt={true} loading={loading}>
          {planId !== 'new' ? 'Submit' : 'Add Plan'}
        </Button>
      </form>
    </Container>
  )
}

export default PlansAlt
