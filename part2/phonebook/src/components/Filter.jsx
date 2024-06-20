import React from 'react'

const Filter = (props) => {
  return (
    <p>
        filter shown with <input value={props.value} onChange={props.handleFilter}/>
    </p>
  )
}

export default Filter