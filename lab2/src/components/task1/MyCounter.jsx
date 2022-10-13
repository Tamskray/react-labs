import {useState} from 'react'

export function MyCounter(props) {
    const {startValue=0, min=-10, max=10} = props
    const [currentValue, setCurrentValue] = useState(startValue) 
    
    return (
        <div>
            <h2>
                Поточний рахунок: {currentValue}
                <button className='btn btn-outline-dark btn1' onClick={() => setCurrentValue(currentValue<max ? currentValue+1 : max)}>+</button>
                <button className='btn btn-outline-dark btn2' onClick={() => setCurrentValue(currentValue>min ? currentValue-1 : min)}>-</button>
                <button className='btn btn-outline-dark btn3' onClick={() => setCurrentValue(currentValue-currentValue)}>Reset</button>
            </h2>
            <hr/>
        </div>
    )
}
