import React from 'react'
import { MyCounter } from './MyCounter'

export function CounterList(props) {
  return (
    <div>
        {props.counters.map(counter => <MyCounter startValue={counter.initial} min={counter.min} max={counter.max}></MyCounter>)}
    </div>
  )
}
