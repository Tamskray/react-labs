import React from 'react'
import Product from './Product'

export function Cart(props) {

    return (
        <div>
            <table className='table'>
                <tr className='bg-success'>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>

                {props.cartList.map(cart =>
                    <>
                        <Product name={cart.name} price={cart.price} min={cart.min} max={cart.max}></Product>
                    </>
                )}

                <tr className='bg-primary'>
                    <th>Totals</th>
                    <th></th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </table>
        </div>
    )
}
