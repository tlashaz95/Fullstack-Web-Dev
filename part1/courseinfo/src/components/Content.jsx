import React from 'react'
import Part from './Part'

const Content = (props) => {
    const allParts = props.parts;
    const allExs = props.exercises;
  return (
    <>
    {
        allParts.map((part, i) => 
            <Part key={i} part={part} exercise={allExs[i]}/>
        )
    }
    </>
  )
}

export default Content