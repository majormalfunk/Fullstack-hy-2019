import React from 'react'

const Languages = (props) => {

  const Language = (props) => {
    return (
      <li>{ props.name }</li>
    )
  }

  const rows = () => props.languages.map(language =>
    <Language key={language.iso639_2} name={language.name} />
  )
  return (
    <ul>{rows()}</ul>
  )
}

export default Languages