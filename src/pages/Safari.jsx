import React from 'react'
import ProductCard from "../components/ProductCard";
import safari1 from "../assets/safari1.png"
import product2 from "../assets/product2.png"
import safari3 from "../assets/safari3.png"
import safari4 from "../assets/safari4.png"
import safari5 from "../assets/safari5.png"
import product6 from "../assets/product6.png"
import product7 from "../assets/product7.png"
import safari8 from "../assets/safari8.png"

const PRODUCTS = [
  { id: 1,  name: "Black Agbada",  price: 50000,   image: safari1 },
  { id: 2,  name: "Native Wears",  price: 50000,    image: product2 },
  { id: 3,  name: "Native Wears",  price: 50000,    image:safari3 },
  { id: 4,  name: "Black Agbada",  price: 50000,   image: safari4 },
  { id: 5,  name: "Native Wears",  price: 50000,   image: safari5 },
  { id: 6,  name: "Native Wears",  price: 50000,    image: product7 },
  { id: 7,  name: "Black Agbada",  price: 50000,   image: safari3 },
  { id: 8,  name: "Native Wears",  price: 50000,  image: safari8  },
 
];

const Safari = () => {
  return (
       <>
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </>
  )
}

export default Safari
