import React from 'react'
import Part from './Part'

const Content = (props) => {
  return (
    <>
    {
        props.parts.map((part, i) => 
            <Part key={i} part={part}/>
        )
    }
    </>
  )
}

export default Content