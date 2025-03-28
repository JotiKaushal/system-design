import React from 'react'

const ProductCard = ({title,price,description,thumbnail,discountPercentage}) => {
  return (
    <div className='m-4 p-4 border border-black'>
        <img className='h-48 object-fill w-70' alt="product image" src={thumbnail}/>
        <h1 className='p-2 font-bold text-xl w-70'>{title}</h1>
        <h2 className='p-1 text-lg w-70'>Rs. {price} - discount of {discountPercentage}%</h2>
        <p className='p-1 text-md w-70'>{description}</p>
    </div>
  )
}

export default ProductCard