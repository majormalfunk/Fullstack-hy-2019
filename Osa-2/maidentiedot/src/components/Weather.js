import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = (props) => {

  const [temperature, setTemperature] = useState('unavail.')
  const [conditionIcon, setConditionIcon] = useState('')
  const [conditionAlt, setConditionAlt] = useState('')
  const [windMPS, setWindMPS] = useState('unavail.')
  const [windDir, setWindDir] = useState('unavail.')

  useEffect(() => {
    const weatherURL = process.env.REACT_APP_APIXU_URL.concat(props.capital)
    axios
      .get(weatherURL).then(response => {
        console.log(response.data.current)
        setTemperature(response.data.current.temp_c)
        setConditionIcon(response.data.current.condition.icon)
        setConditionAlt(response.data.current.condition.text)
        setWindMPS((Math.round((response.data.current.wind_kph/3600)*10000)/10).toFixed(1))
        setWindDir(response.data.current.wind_dir)
      })
  }, [])

  return (
    <table>
      <tbody>
        <tr><td><h3>Weather in {props.capital}</h3></td></tr>
        <tr><td>Temperature: {temperature}° C</td></tr>
        <tr><td>
          <img src={'https:' + conditionIcon} alt={conditionAlt} />
        </td></tr>
        <tr><td>
          Wind: {windMPS} m/s, {windDir}
        </td></tr>
      </tbody>
    </table>

  )

}

export default Weather
