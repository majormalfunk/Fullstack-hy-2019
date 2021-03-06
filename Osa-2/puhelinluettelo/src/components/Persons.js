import React from 'react'
import Person from './Person'

const Persons = (props) => {

  const personsToShow = props.persons.filter(person =>
    person.name.toUpperCase().includes(props.nameFilter.toUpperCase()))

  const rows = () => personsToShow.map(person =>
    <Person
      key={person.id}
      person={person}
      doRemove={props.doRemove}
      handleRemoving={props.handleRemoving}
    />
  )
  return (
    <>{rows()}</>
  )
}

export default Persons