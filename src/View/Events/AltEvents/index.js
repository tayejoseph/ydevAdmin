import React, { useState } from 'react'
import { Modal, InputGroup, Button } from '../../../UI'
import { useHistory } from 'react-router-dom'
import Container from './styles'

const AltEvents = () => {
  const [formData, setFormData] = useState({})
  const history = useHistory()
  const handleInput = ({ target: { value, name } }) => {
    setFormData((s) => ({
      ...s,
      [name]: value,
    }))
  }
  return (
    <Container>
      <Modal
        modalTitle="Add Event"
        modalFooter={
          <Button full type="submit" form={'event--form'}>
            Save
          </Button>
        }
      >
        <form
          id="event--form"
          name="event--form"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <InputGroup
            name="eventName"
            onChange={handleInput}
            value={formData.eventName}
            label="Event Name"
          />
          <InputGroup
            name="eventName"
            type="date"
            onChange={handleInput}
            label="Event Name"
          />
          <InputGroup>
            <label>Event Description</label>
            <textarea />
          </InputGroup>
        </form>
      </Modal>
    </Container>
  )
}

export default AltEvents
