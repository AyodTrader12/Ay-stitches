import React from 'react'
import ProductCard from "../components/ProductCard";
import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"
import product4 from "../assets/product4.png"
import product5 from "../assets/product5.png"
import product6 from "../assets/product6.png"
import product7 from "../assets/product7.png"
import product8 from "../assets/product8.png"

const PRODUCTS = [
  { id: 1,  name: "Black Agbada",  price: 50000,   image: product1 },
  { id: 2,  name: "Native Wears",  price: 50000,    image: product2 },
  { id: 3,  name: "Native Wears",  price: 50000,    image: product3 },
  { id: 4,  name: "Black Agbada",  price: 50000,   image: product4 },
  { id: 5,  name: "Native Wears",  price: 50000,   image: product5 },
  { id: 6,  name: "Native Wears",  price: 50000,    image: product6 },
  { id: 7,  name: "Black Agbada",  price: 50000,   image: product7 },
  { id: 8,  name: "Native Wears",  price: 50000,  image: product8 },
 
];
const Blaazzers = () => {
  return (
      <>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </>
  )
}

export default Blaazzers
