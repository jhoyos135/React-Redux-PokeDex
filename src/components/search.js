import React from 'react'

const Search = ({ onChange }) => (
  <input
    type="search"
    onChange={onChange}
    placeholder="Enter pokemon name..."
    autoFocus
  />
)

export default Search