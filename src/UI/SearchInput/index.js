import React from 'react'
import { Search } from '../../asset/convertedSvg'
import { Button } from '../'
import Container from './style'

const SearchInput = ({ height = '2.5rem' }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Container height={height} className="searchInput--container">
      <form noValid onSubmait={handleSubmit}>
        <input placeholder="Search for products" />
        <Button icon aria-label="clear search" className="search--btn">
          <Search stroke="#fff" />
        </Button>
      </form>
    </Container>
  )
}

export default SearchInput
