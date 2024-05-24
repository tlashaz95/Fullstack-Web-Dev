import React from 'react'

const Total = (props) => {
  const sum = props.parts.reduce(
    (accum, currentVal) => accum + currentVal.exercises,
    0
  )
  return (
    <>
    <p><b>total of {sum} exercises</b></p>
    </>
  )
}

export default Total