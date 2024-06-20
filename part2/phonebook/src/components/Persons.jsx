import React from 'react'
import PersonDetails from './PersonDetails'

const Persons = (props) => {
    const persons = props.persons
    const filterName = props.filteredName
    const onDelete = props.onDelete

  return (
    <div>
        {
        persons.filter((person) => {
          if(filterName === '')
            return person
          else if(person.name.toLowerCase().includes(filterName.toLowerCase()))
            return person
        }).map((person) => {
          return <PersonDetails key={person.id} person={person} onDelete={onDelete}/>
        })
      }
    </div>
  )
}

export default Persons