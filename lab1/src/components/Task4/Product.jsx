import React from 'react'
import likeIcon from './images/likeIcon.png'

function LikeBtn() {
  return (
    <div>
      <p>
        <button>
          <img src={likeIcon} alt="likeIcon" width="24" height="24"/>
        </button>
      </p>
    </div>
  )
}

function Picture(props) {
  return (
    <div>
        <img src={props.sourceImage} alt="productImage" width="140" height="100" />
    </div>
  )
}

function ProductName(props) {
  return (
    <div>
        <h4>{props.name}</h4>
    </div>
  )
}

function Price(props) {
  return (
    <div>
        <h1>{props.price}</h1>
    </div>
  )
}

function Product(props) {
  return (
    <div className="card">
        <LikeBtn />
        <Picture sourceImage={props.sourceImage}/>
        <ProductName name={props.name} />
        <Price price={props.price} />
    </div>
  )
}

export default Product