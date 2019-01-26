import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './Countries'
import FilterForm from './FilterForm'

const App = () => {
  const [countries, setCountries] = useState([])
  const [nameFilter, setFilter] = useState('')

  useEffect(() => {
    //console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all').then(response => {
        //console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const handleFiltering = (event) => {
    //console.log("Filter:", event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <FilterForm
        nameFilter={nameFilter}
        handleFiltering={handleFiltering}
      />
      <table>
        <tbody>
          <Countries
            countries={countries}
            nameFilter={nameFilter}
            setFilter={setFilter}
          />
        </tbody>
      </table>
    </div>
  )

}

export default App