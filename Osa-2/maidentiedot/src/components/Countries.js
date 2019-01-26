import React from 'react'
import Country from './Country'
import CountryDetails from './CountryDetails'

const Countries = (props) => {

  const countriesToShow = props.countries.filter(country =>
    country.name.toUpperCase().includes(props.nameFilter.toUpperCase()))

  if (countriesToShow.length > 10) {
    return (
      <tr><td>Too many matches, give a longer search string</td></tr>
    )
  } else if (countriesToShow.length > 1) {
    const rows = () => countriesToShow.map(country =>
      <Country
        key={country.alpha3Code}
        country={country}
        setFilter={props.setFilter}
      />
    )
    return (
      <>{rows()}</>
    )
  } else if (countriesToShow.length === 1) {
    return (
      <tr><td><CountryDetails country={countriesToShow[0]} /></td></tr>
    )
  } else {
    return (
      <tr><td>No matches found, specify another search string</td></tr>
    )
  }
}

export default Countries