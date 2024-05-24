import React from 'react'
import Part from './Part'
import Total from './Total'

const Content = ({parts}) => {
  return (
    <>
    {
        parts.map((part, i) => 
            <Part key={i} part={part}/>
        )
    }
    <Total parts={parts}/>
    </>
  )
}

export default Content