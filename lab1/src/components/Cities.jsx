import React from 'react'

function Cities(props) {
  return (
    <div>
        <p>
            <select>
                {props.cities.map(city => <option value={city.name}>{city.name}</option>)}
            </select>
        </p>
    </div>
  )
}

export default Cities