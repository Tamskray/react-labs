import React from 'react'
import Product from './Product'

function Cards(props) {
  return (
    <div>
      {props.productsList.map(product => <Product sourceImage={product.sourceImage} name={product.name} price ={product.price} />)}
      {/*
      {props.productsList.map(product => <Product sourceImage={product.sourceImage} name={product.name} price ={product.price} />)}
      {props.productsList.map(product => <Product sourceImage={product.sourceImage} name={product.name} price ={product.price} />)}
      */}
    </div>
  )
}

export default Cards