import React from 'react'

const PersonForm = (props) => {

  return (
    <form onSubmit={props.addName}>
      <table>
        <tbody>
          <tr>
            <td>Nimi:</td>
            <td>
              <input value={props.newName} onChange={props.handleNameChange} />
            </td>
          </tr>
          <tr>
            <td>Numero:</td>
            <td>
              <input value={props.newNumber} onChange={props.handleNumberChange} />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  )

}

export default PersonForm
