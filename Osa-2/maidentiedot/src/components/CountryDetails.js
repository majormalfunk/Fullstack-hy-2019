import React from 'react'
import Languages from './Languages'

const CountryDetails = (props) => {

  return (
    <table>
      <tbody>
        <tr><td colSpan="2"><h1>{props.country.name}</h1></td></tr>
        <tr><td>Capital</td><td>{props.country.capital}</td></tr>
        <tr><td>Population</td><td>{props.country.population}</td></tr>
        <tr><td colSpan="2">
          <h3>Languages</h3>
          <Languages languages={props.country.languages} />
        </td></tr>
        <tr><td colSpan="2"><img src={props.country.flag} alt="flag" width="150px" /></td></tr>
      </tbody>
    </table>

  )

}

export default CountryDetails
