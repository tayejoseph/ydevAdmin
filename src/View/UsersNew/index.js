import React, { useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { formValidator, scrollDashboardToTop } from '../../helpers'
import { AppRoute } from '../../constants'
import { Button, InputGroup, Uploader } from '../../UI'
import { SectionHeader } from '../../components'
import { altUsers } from '../../store/action'
import Container from './styles'

const UsersNew = () => {
  const {
    params: { userId },
  } = useRouteMatch()
  const { roles, usersData } = useSelector((s) => s.adminData)
  const history = useHistory()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const [formData, setFormDate] = useState(() =>
    userId !== 'new' && usersData?.users
      ? usersData.users.find((item) => Number(item.id) === Number(userId))
      : {
          fname: '',
          sname: '',
          email: '',
          phone: '',
          role_id: '',
          gender: '',
          date_of_birth: '',
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
      formValidator(document.forms['user--form'].getElementsByTagName('input'))
    ) {
      setLoading(true)
      try {
        const response = await dispatch(
          altUsers(formData, userId === 'new' ? 'add' : 'edit'),
        )
        if (response && response.success) {
          history.goBack()
        } else {
          setTimeout(() => {
            scrollDashboardToTop()
          }, 300)
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
        title={`${userId === 'new' ? 'Add' : 'Edith'} Users`}
        links={[
          { title: 'Users', link: AppRoute.dashboard.users.initial },
          {
            title: `${userId === 'new' ? 'Add' : 'Edith'} Users`,
            link: `${AppRoute.dashboard.users.initial}/${userId}`,
          },
        ]}
      />
      <form
        name="user--form"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
        noValidate
      >
        <section>
          <div className="input--row">
            <InputGroup
              label="First Name"
              onChange={handleInput}
              name="fname"
              required
              data-label="First Name"
              value={formData.fname}
            />
            <InputGroup
              label="Last Name"
              onChange={handleInput}
              name="sname"
              required
              data-label="Last Name"
              value={formData.sname}
            />
          </div>
          <div className="input--row">
            <InputGroup
              label="Email Address"
              onChange={handleInput}
              name="email"
              type="email"
              required
              data-label="Email"
              value={formData.email}
            />
            <InputGroup
              label="Phone Number"
              onChange={handleInput}
              name="phone"
              type="tel"
              required
              data-label="Phone Number"
              value={formData.phone}
            />
          </div>
          <div className="input--row">
            <InputGroup errorClass="role">
              <label>Role</label>
              <select
                value={formData.role_id}
                name="role_id"
                data-error="role"
                onChange={handleInput}
                required
              >
                <option value={''} disabled>
                  Select a Role
                </option>
                {roles &&
                  roles.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </InputGroup>
            <InputGroup
              label="Password"
              type="password"
              onChange={handleInput}
              name="password"
              required={false}
              value={formData.password}
            />
          </div>
        </section>
        <section>
          <h2>Security</h2>
          <div className="input--row">
            <InputGroup>
              <label>Gender</label>
              <select
                value={formData.gender}
                name="gender"
                onChange={handleInput}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </InputGroup>
            <InputGroup
              label="Date of birth"
              type="date"
              onChange={handleInput}
              name="dob"
              value={formData.dob}
            />
          </div>
          <div className="input--row">
            <InputGroup
              label="House Address"
              onChange={handleInput}
              name="address"
              value={formData.address}
            />
            <InputGroup
              label="BVN"
              type="number"
              onChange={handleInput}
              name="bvn"
              value={formData.bvn}
            />
          </div>
          <div className="input--row">
            <InputGroup
              label="Password"
              type="password"
              onChange={handleInput}
              name="password"
              value={formData.password}
            />
          </div>
        </section>
        <section>
          <h2>Uploads</h2>
          <div className="input--row upload--row">
            <Uploader label="Selfie" />
            <Uploader label="Verification documents" />
          </div>
        </section>
        <Button loading={loading} spinnerWithTxt={true} type="submit">
          {userId === 'new' ? 'Create User' : 'Submit'}
        </Button>
      </form>
    </Container>
  )
}

export default UsersNew
