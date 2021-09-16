import React from 'react'
import { useHistory } from 'react-router-dom'
import { message } from 'antd'
import { Button, InputGroup } from '../../../UI'
import Container from './styles'

const Api = () => {
  return (
    <Container>
      <section>
        <header>
          <h1>Live API keys</h1>
          <Button outlined>Generate new keys</Button>
        </header>
        <form>
          <InputGroup>
            <label>Public Key</label>
            <div>
              <Button onClick={() => message.success('Copied item')}>
                Copy link
              </Button>
            </div>
          </InputGroup>
          <InputGroup>
            <label>Secret Key</label>
            <div>
              <Button onClick={() => message.success('Copied item')}>
                Copy link
              </Button>
            </div>
          </InputGroup>
          <InputGroup>
            <label>Ecryption Key</label>
            <div>
              <Button onClick={() => message.success('Copied item')}>
                Copy link
              </Button>
            </div>
          </InputGroup>
        </form>
      </section>
    </Container>
  )
}

export default Api
