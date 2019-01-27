import React, { useState, useEffect } from 'react'
import personService from '../services/persons'
import Notification from './Notification'
import Persons from './Persons'
import PersonForm from './PersonForm'
import FilterForm from './FilterForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationClass, setNotificationClass] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNameChange = (event) => {
    //console.log("Name.", event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log("Number:", event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFiltering = (event) => {
    //console.log("Filter:", event.target.value)
    setFilter(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name.toUpperCase() === newName.toUpperCase())) {
      var updatee = (persons.filter(person => person.name.toUpperCase() === newName.toUpperCase()))[0]
      if (window.confirm(`${newName} on jo luettelossa. Korvataanko vanha numero?`)) {
        updatee.number = newNumber

        personService
          .update(updatee.id, updatee)
          .then(updated => {
            setPersons(persons.map(p => p.id !== updatee.id ? p : updated))
            setNewName('')
            setNewNumber('')
            setNotificationMessage(`Henkilön ${updated.name} numeroksi muutettiin ${updated.number}`)
            setNotificationClass("success")
            setTimeout(() => { setNotificationMessage(null) }, 5000)
          })
          .catch(error => {
            setPersons(persons.filter(p => p.id !== updatee.id))
            setNotificationMessage(`Henkilö ${updatee.name} oli jo poistettu`)
            setNotificationClass("error")
            setTimeout(() => { setNotificationMessage(null) }, 5000)
          })

      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }

      personService
        .create(personObject)
        .then(created => {
          setPersons(persons.concat(created))
          setNewName('')
          setNewNumber('')
          setNotificationMessage(`Henkilö ${created.name} lisättiin numerolla ${created.number}`)
          setNotificationClass("success")
          setTimeout(() => { setNotificationMessage(null) }, 5000)
        })
        .catch(error => {
          setNotificationMessage(`Henkilön ${newName} lisääminen ei onnistunut`)
          setNotificationClass("error")
          setTimeout(() => { setNotificationMessage(null) }, 5000)
        })
    }
  }

  const doRemove = (id, name) => {
    if (window.confirm(`Poistetaanko ${name}?`)) {
      personService
        .remove(id)
        .then(what => {
          setPersons(persons.filter(p => p.id !== id))
          setNotificationMessage(`Henkilö ${name} poistettiin`)
          setNotificationClass("success")
          setTimeout(() => { setNotificationMessage(null) }, 5000)
        })
        .catch(error => {
          setNotificationMessage(`Henkilön ${name} poistaminen ei onnistunut`)
          setNotificationClass("error")
          setTimeout(() => { setNotificationMessage(null) }, 5000)
        })

    }
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <FilterForm
        nameFilter={nameFilter}
        handleFiltering={handleFiltering}
      />
      <Notification message={notificationMessage} class={notificationClass} />
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
          <Persons
            persons={persons}
            nameFilter={nameFilter}
            doRemove={doRemove} />
        </tbody>
      </table>
    </div>
  )

}

export default App