import {useState} from 'react'

function Product(props) {
    const {name, price, startValue=0, min=0, max=10} = props
    const [quantity, setQuantity] = useState(startValue) 

    return (
        // <div>
        //     <button className='btn btn-outline-dark' onClick={() => setQuantity(quantity<max ? quantity+1 : max)}>+</button>
        //     {quantity}
        //     <button className='btn btn-outline-dark' onClick={() => setQuantity(quantity>min ? quantity-1 : min)}>-</button>
        //     {/* Total: {quantity*300} */}
        // </div>
        <>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>
                    <button className='btn btn-outline-dark' onClick={() => setQuantity(quantity<max ? quantity+1 : max)}>+</button>
                    {quantity}
                    <button className='btn btn-outline-dark' onClick={() => setQuantity(quantity>min ? quantity-1 : min)}>-</button>
                </td>
                <td>{price*quantity}</td>
            </tr>
        </>
    )
}

export default Product