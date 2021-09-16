import React, { useState } from 'react'
import { Button, InputGroup } from '../../../UI'
import Container from './styles'

const WebHook = () => {
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
          <h1>WebHooks</h1>
          <Button outlined>Generate new keys</Button>
        </header>
        <form>
          <InputGroup
            label="URL"
            type="url"
            name="url"
            value={formData.url}
            onChange={handleInput}
          />
          <InputGroup
            label="Secret Hash"
            name="secretHash"
            value={formData.secretHash}
            onChange={handleInput}
          />
          <div className="select--group">
            <label>
              <input type="checkbox" />
              Receive Webhook response in JSON format
            </label>
            <label>
              <input type="checkbox" />
              Enable Webhook retries
            </label>
            <label>
              <input type="checkbox" />
              Enable failed transactions webhook
            </label>
            <label>
              <input type="checkbox" />
              Enable V3 Webhook
            </label>
          </div>
          <Button type="submit">Save</Button>
        </form>
      </section>
    </Container>
  )
}

export default WebHook
