import React, {useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './Persons'
import PersonForm from './PersonForm'
import FilterForm from './FilterForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons').then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    console.log("Name.", event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log("Number:", event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFiltering = (event) => {
    console.log("Filter:", event.target.value)
    setFilter(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name.toUpperCase() === newName.toUpperCase())) {
      alert(`${newName} on jo luettelossa`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <FilterForm
        nameFilter={nameFilter}
        handleFiltering={handleFiltering}
      />
      <h3>Lisää uusi</h3>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numerot</h3>
      <table>
        <tbody>
          <Persons persons={persons} nameFilter={nameFilter} />
        </tbody>
      </table>
    </div>
  )

}

export default App