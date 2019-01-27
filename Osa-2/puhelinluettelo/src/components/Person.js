import React from 'react'

const Person = (props) => {

  return (
    <tr>
      <td>{props.person.name}</td>
      <td>{props.person.number}</td>
      <td>
        <button onClick={() => props.doRemove(props.person.id, props.person.name)}>
          Poista
          </button>
      </td>
    </tr>
  )

}

export default Person
