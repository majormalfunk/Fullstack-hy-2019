import React from 'react'
import Person from './Person'

const Persons = (props) => {

  const personsToShow = props.persons.filter(person =>
    person.name.toUpperCase().includes(props.nameFilter.toUpperCase()))

  const rows = () => personsToShow.map(person =>
    <Person key={person.id} person={person} />
  )
  return (
    <>{rows()}</>
  )
}

export default Persons