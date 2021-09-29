import React from 'react'
import { Modal, InputGroup, Button } from '../../../UI'
import { useHistory } from 'react-router-dom'
import Container from './styles'

const AllEvents = ({ handleHideModal }) => {
  const handleInput = ({ target: { value, name } }) => {}
  const handleSubmit = () => {}
  return (
    <Container>
      <Modal
        modalTitle={'Add Event'}
        showModal={true}
        onClose={handleHideModal}
        modalFooter={<Button full>Submit</Button>}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          <InputGroup label="Event Name" onChange={handleInput} />
          <InputGroup type="date" label="Event Date" />
          <InputGroup
            label="Event Description"
            type="textarea"
            onChange={handleInput}
          />
        </form>
      </Modal>
    </Container>
  )
}

export default AllEvents
