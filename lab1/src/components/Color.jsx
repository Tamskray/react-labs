import {useState} from 'react'

function Color(props) {
    const [color, setColor] = useState('red')

    const style = {
        color: color
    }
    return (
        <div>
            <h2 style={style}>I'm {color} Color!</h2>
            <select onChange={(e) => setColor(e.target.value)}>
                {props.colors.map(val => <option value={val}>{val}</option>)}
                {/* 
                <option value='red'>red</option>
                <option value='blue'>blue</option>
                <option value='green'>green</option>
                <option value='yellow'>yellow</option>
                */}
            </select>
        </div>
    )
}

export default Color