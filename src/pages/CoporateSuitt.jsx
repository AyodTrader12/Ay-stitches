import React from 'react'
import ProductCard from "../components/ProductCard";
import suit1 from "../assets/suit1.avif"
import suit2 from "../assets/suit2.webp"
import suit3 from "../assets/suit3.webp"
import suit4 from "../assets/suit4.avif"
import suit5 from "../assets/suit5.avif"
import  suit6 from "../assets/suit6.avif"
import suit7 from "../assets/suit7.avif"
import suit8 from "../assets/suit8.avif"

const PRODUCTS = [
  { id: 1,  name: "corporate & suits",  price: 50000,   image: suit1 },
  { id: 2,  name: "corporate & suits",  price: 50000,    image: suit2 },
  { id: 3,  name: "corporate & suits",  price: 50000,    image: suit3 },
  { id: 4,  name: "corporate & suits",  price: 50000,   image: suit4 },
  { id: 5,  name: "corporate & suits",  price: 50000,   image: suit5 },
  { id: 6,  name: "corporate & suits",  price: 50000,    image: suit6 },
  { id: 7,  name: "corporate & suits",  price: 50000,   image: suit7 },
  { id: 8,  name: "corporate & suits",  price: 50000,  image: suit8 },
 
];
const CoporateSuitt = () => {
  return (
      <>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </>
  )
}

export default CoporateSuitt
