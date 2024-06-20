import React from 'react'

const Total = (props) => {
  const sum = props.parts.reduce(
    (accum, currentVal) => accum + currentVal.exercises,
    0
  )
  return (
    <>
    <p>Number of exercises {sum}</p>
    </>
  )
}

export default Total