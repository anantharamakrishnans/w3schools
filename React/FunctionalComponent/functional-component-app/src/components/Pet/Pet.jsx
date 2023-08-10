import React from 'react'

function Pet({ type = 'UNKNOWN PET' }) {
  return (
    <p>I have a {type}</p>
  )
}

export default Pet