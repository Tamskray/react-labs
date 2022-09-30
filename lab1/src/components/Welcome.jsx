import React from 'react'

function Welcome(props) {
  return (
    <div>
        <h1>Hello {props.name} and welcome to {props.labName}</h1>
    </div>
  )
}

export default Welcome