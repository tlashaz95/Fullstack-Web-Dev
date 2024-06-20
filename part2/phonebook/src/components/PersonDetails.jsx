import React from 'react'

const PersonDetails = (props) => {
    const person = props.person

    const handleDelete = () => {
      props.onDelete(person)
    }

  return (
    <div><p key={person.id}>{person.name} {person.number} <button onClick={handleDelete}>delete</button></p></div>
  )
}

export default PersonDetails