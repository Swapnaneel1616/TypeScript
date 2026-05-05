import React from 'react'

const ProductInfo = () => {
    let product = {
        name: "Laptop",
        price: 999,
        availability: "In Stock"
    }
  return (
    <div>
      <h2>This is the following product available: {product.name}</h2>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Availability: {product.availability}</p>
      <p>The whole product is {JSON.stringify(product)}</p>
    </div>
  )
}

export default ProductInfo
