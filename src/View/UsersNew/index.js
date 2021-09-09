import React, { useState } from 'react'
import { AppRoute } from '../../constants'
import { Button, InputGroup } from '../../UI'
import { SectionHeader, TableContainer } from '../../components'
import Container from './styles'

const UsersNew = () => {
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
        title="Add Users"
        links={[
          { title: 'Users', link: AppRoute.dashboard.users.initial },
          { title: 'Add Users', link: AppRoute.dashboard.users.new },
        ]}
      />
      <form>
        <section>
          <div className="input--row">
            <InputGroup
              label="First Name"
              onChange={handleInput}
              name="firstName"
              value={formData.firstName}
            />
            <InputGroup
              label="Last Name"
              onChange={handleInput}
              name="lastName"
              value={formData.lastName}
            />
          </div>
          <div className="input--row">
            <InputGroup
              label="Email Address"
              onChange={handleInput}
              name="email"
              type="email"
              value={formData.email}
            />
            <InputGroup
              label="Phone Number"
              onChange={handleInput}
              name="phoneNo"
              type="tel"
              value={formData.phoneNo}
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
          <div className="input--row">
            <InputGroup
              label="Subject"
              onChange={handleInput}
              name="subject"
              value={formData.subject}
            />
            <InputGroup
              label="User Type"
              onChange={handleInput}
              name="userType"
              value={formData.userType}
            />
          </div>
        </section>
        <Button type="submit">Create User</Button>
      </form>
    </Container>
  )
}

export default UsersNew
