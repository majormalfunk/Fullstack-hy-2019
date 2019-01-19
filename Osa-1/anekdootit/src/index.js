import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Anecdote = (props) => {
  if (props.index > -1) {
    return (
      <div>
        <p>{anecdotes[props.index]}</p>
        <p>Has {props.hasVotes} votes</p>
      </div>
    )
  }
  return null
}

const App = (props) => {
  const selectRandom = [Math.floor(Math.random() * anecdotes.length)]
  const [selected, setSelected] = useState(selectRandom)
  const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0))
  //(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0), useState(0))
  const [mostPopular, setPopular] = useState(-1)

  const voteThis = anecdote => {
    let newValue = votes[anecdote] + 1
    votes[anecdote] = newValue
    setVotes(votes)
    setPopular(votes.indexOf(Math.max(...votes)))
  }
  const chooseAnother = newValue => {
    setSelected(newValue)
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <Anecdote index={selected} hasVotes={votes[selected]} />
      <Button handleClick={() => voteThis(selected)} text="Vote This" />
      <Button handleClick={() => chooseAnother(selectRandom)} text="Next Anecdote" />
      <h1>Most Popular Anecdote</h1>
      <Anecdote index={mostPopular} hasVotes={votes[mostPopular]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />,
  document.getElementById('root')
);
