import React, { useState } from 'react'
import { Button, InputGroup } from '../../../UI'
import Container from './styles'

const Settings = () => {
  const [formData, setFormData] = useState({ url: '', secretHash: '' })
  const handleInput = ({ target: { value, name } }) => {
    setFormData((s) => ({
      ...s,
      [name]: value,
    }))
  }
  return (
    <Container>
      <section>
        <header>
          <h1>Account Settings</h1>
          <Button outlined>Generate new keys</Button>
        </header>
        <form>
          <div className="section--group">
            <p>Who should pay the transaction fees?</p>
            <div className="select--group">
              <label>
                <input type="checkbox" />
                Make customers pay the transaction fees
              </label>
              <label>
                <input type="checkbox" />
                Charge me for the transaction fees
              </label>
            </div>
          </div>
          <div className="email--group">
            <div className="section--group">
              <p>Transaction emails</p>
              <div className="select--group">
                <label>
                  <input type="checkbox" />
                  Email me for every transaction
                </label>
              </div>
            </div>{' '}
            <div className="section--group">
              <p>WTransaction emails (Customers)</p>
              <div className="select--group">
                <label>
                  <input type="checkbox" />
                  Email customers for every transaction
                </label>
              </div>
            </div>{' '}
          </div>
          <div className="section--group">
            <p>Send notification emails to other users</p>
            <div className="select--group">
              <label>
                <input type="checkbox" />
                Send to the business email address only
              </label>
              <label>
                <input type="checkbox" />
                Send to all dashboard users
              </label>
              <label>
                <input type="checkbox" />
                Send to all dashboard users
              </label>
              <label>
                <input type="checkbox" />
                Send to specific users only
              </label>
            </div>
          </div>{' '}
          <div className="section--group">
            <p>Transfer Receipts</p>
            <div className="select--group">
              <label>
                <input type="checkbox" />
                Send email receipts for successful transfers.
              </label>
            </div>
          </div>
          <div className="section--group">
            <p>Two factor authentication</p>
            <div className="select--group">
              <label>
                <input type="checkbox" />
                Enable two factor authentication for Transfers
              </label>
              <label>
                <input type="checkbox" />
                Enable two factor authentication for Login
              </label>
            </div>
          </div>
          <Button type="submit">Save</Button>
        </form>
      </section>
    </Container>
  )
}

export default Settings
