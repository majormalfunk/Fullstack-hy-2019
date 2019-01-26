import React from 'react'

const Country = (props) => {

  return (
    <tr><td>
      {props.country.name}
      <button onClick={() => props.setFilter(props.country.name)}>
        Show
      </button>
    </td></tr>
  )

}

export default Country
