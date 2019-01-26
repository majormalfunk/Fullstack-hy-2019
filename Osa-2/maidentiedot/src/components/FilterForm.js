import React from 'react'

const FilterForm = (props) => {

  return (
    <table>
      <tbody>
        <tr>
          <td>Find countries:</td>
          <td>
            <input value={props.nameFilter} onChange={props.handleFiltering} />
          </td>
        </tr>
      </tbody>
    </table>
  )

}

export default FilterForm
