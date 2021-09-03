import React from 'react'
import { InputGroup, Button } from '../../../UI'
import Container from './styles'

const BorrowAction = () => {
  return (
    <Container>
      <form>
        <div className="input--row">
          <InputGroup label="Subject" />
          <InputGroup label="Borrowers category" />
        </div>
        <InputGroup label="Borrower Type" />
        <InputGroup>
          <label>Message</label>
          <textarea />
        </InputGroup>
        <Button type="submit">Send Email</Button>
      </form>
    </Container>
  )
}

export default BorrowAction
