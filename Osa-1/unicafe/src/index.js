import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const reviewsCount = (props) => props.good + props.neutral + props.bad
const reviewsSum = (props) => props.good + (props.bad * -1)
const reviewsAverage = (props) => {
  if (reviewsCount(props) > 0) {
    return reviewsSum(props) / reviewsCount(props)
  } else {
    return 0
  }
}
const reviewsPositive = (props) => {
  if (reviewsCount(props) > 0) {
    return (100 * props.good) / reviewsCount(props)
  } else {
    return 0
  }
}

const Statistic = (props) => {
  return (
    <tr><td>{props.stat}</td><td>{props.value} {props.unit}</td></tr>
  )
}

const Statistics = (props) => {

  if (reviewsCount(props) > 0) {
    return (
      <>
      <Statistic stat="Hyvä" value={props.good} />
      <Statistic stat="Neutraali" value={props.neutral} />
      <Statistic stat="Huono" value={props.bad} />
      <Statistic stat="Yhteensä" value={reviewsCount(props)} />
      <Statistic stat="Keskiarvo" value={reviewsAverage(props)} />
      <Statistic stat="Positiivisia" value={reviewsPositive(props)} unit="%" />
      </>
    )
  } else {
    return (
      <tr><td>Ei yhtään palautetta annettu</td></tr>
    )
  }
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [good, setGood] = useState(0)

  const addBad = newValue => {
    setBad(newValue)
  }
  const addNeutral = newValue => {
    setNeutral(newValue)
  }
  const addGood = newValue => {
    setGood(newValue)
  }

  return (
    <div>
      <h1>Anna palautetta!</h1>
      <Button handleClick={() => addBad(bad + 1)} text="Yök!!!" />
      <Button handleClick={() => addNeutral(neutral + 1)} text="Meh..." />
      <Button handleClick={() => addGood(good + 1)} text="Jep!!!" />
      <h2>Statistiikka</h2>
      <table>
        <tbody>
          <Statistics bad={bad} neutral={neutral} good={good} />
        </tbody>
      </table>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'));

