import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = (props) => {
  const {name, parts} = props.course
  return (
    <>
        <Header name={name}/>
        <Content parts={parts}/>
    </>
  )
}

export default Course