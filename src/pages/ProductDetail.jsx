import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineFormatQuote } from "react-icons/md";
// ── You Might Also Like products ──
import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"
// swap with your actual product detail image
import mainProduct from "../assets/product1.png"

const RELATED = [
  { id: 1, name: "Native wears",  price: 50000, image: product1,
    desc: "Beautifully crafted native pieces designed for comfort, confidence, and cultural pride." },
  { id: 2, name: "Black Agbada",  price: 50000, image: product2,
    desc: "Beautifully crafted native pieces designed for comfort, confidence, and cultural pride." },
  { id: 3, name: "Safari wears",  price: 50000, image: product3,
    desc: "Beautifully crafted native pieces designed for comfort, confidence, and cultural pride." },
]

const SIZES = ["L", "M", "S"]

const RATING_BARS = [
  { star: 5, width: "w-[95%]" },
  { star: 4, width: "w-3/4" },
  { star: 3, width: "w-1/6" },
  { star: 2, width: "w-1/12" },
  { star: 1, width: "w-[4%]" },
]

// ── Countdown Timer ──
function useCountdown(initialSeconds) {
  const [seconds, setSeconds] = useState(initialSeconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0")
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")
  const s = String(seconds % 60).padStart(2, "0")
  return `${h}:${m}:${s}`
}

// ── Related Product Card with hover effect ──
function RelatedCard({ name, price, image, desc }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">

      {/* Image - expands on hover */}
      <div className="relative overflow-hidden bg-gray-100 group-hover:aspect-square transition-all duration-300 aspect-square">                                                                                                                                                         
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 "
        />
      </div>

      {/* Info - hidden on hover */}
      <div className="p-4 group-hover:hidden transition-opacity duration-300">
        <h3 className="font-bold text-gray-900 text-sm mb-1">{name}</h3>
        <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">{desc}</p>
        <button className="bg-gray-900 text-white text-xs font-bold px-5 py-2.5 rounded-full
          hover:bg-green-700 transition-colors duration-200">
          ₦{price.toLocaleString()}
        </button>
      </div>

      {/* Hover button - takes full card */}
             {/* Hover overlay with Buy Now button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100
          transition-opacity duration-300 flex items-end ">
          <button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white
            text-gray-900 font-bold text-sm py-3 rounded-md
            hover:bg-gray-900 hover:text-white transition-colors duration-200">
            {/* Cart icon */}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13M9 19a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
            Buy Now
          </button>
        </div>
      </div>


    
  )
}

// ── Star Rating Display ──
function Stars({ count = 5, filled = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className={`w-5 h-5 ${i < filled ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  )
}

// ── Main Product Detail Page ──
export default function ProductDetailPage() {
  const navigate = useNavigate()
  const [selectedSize, setSelectedSize] = useState("L")
  const countdown = useCountdown(2 * 3600 + 45 * 60) // 2h 45m

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">

        {/* ── Back arrow + Breadcrumb ── */}
        <div className="flex items-center gap-3 mb-8">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center
              justify-center hover:bg-gray-50 hover:border-gray-400 transition-all flex-shrink-0"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm">
            <button
              onClick={() => navigate("/")}
              className="text-gray-500 hover:text-green-700 transition-colors"
            >
              Home
            </button>
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-bold text-gray-900">Product details</span>
          </nav>
        </div>

        {/* ── Product Section ── */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 mb-16">

          {/* Left — Product Image */}
          <div className="w-full md:w-[380px] flex-shrink-0 max-h-[900px]">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/5]">
              <img
                src={mainProduct}
                alt="Product"
                className="w-full h-full object-cover object-top"
              />
              {/* Men Fashion tag */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm
                rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm">
                <span className="text-gray-500 text-xs">Men</span>
                <span className="text-black text-xs font-bold">Fashion</span>
              </div>
            </div>
          </div>

          {/* Right — Product Info */}
          <div className="flex-1 flex flex-col gap-5">

            {/* Name */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              Coloured Safari Wears for Men
            </h1>

            {/* Price */}
            <p className="text-2xl font-sans text-gray-900">₦50,000</p>

            {/* Countdown timer */}
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200
              rounded-full px-4 py-2 w-fit">
              <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
              <span className="text-sm text-gray-600">
                Order in{" "}
                <span className="font-bold text-gray-900">{countdown}</span>
                {" "}to get the Next day delivery
              </span>
            </div>

            {/* Size selector */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Select Size</p>
              <div className="flex items-center gap-3">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-20 h-20 rounded-full text-2xl font-normal bg-gray-600 transition-all duration-200
                      ${selectedSize === size
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-900 hover:text-gray-900"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              {/* Add to cart */}
              <button className="flex-1 bg-gray-900  text-white font-sans text-xl
                py-3 rounded-full transition-colors duration-200 text-lg tracking-wide max-w-[250px]">
                Add to cart
              </button>

              {/* WhatsApp */}
              <button className="flex-1 flex items-center justify-center gap-2.5 border-2 max-w-[250px]
                border-gray-200 bg-white text-gray-800 font-sans text-xl
                py-3 rounded-full transition-all duration-200 text-sm">
                {/* WhatsApp SVG icon */}
               <IoLogoWhatsapp  className="text-green-500" size={40}/>
                WhatsApp us
              </button>
            </div>

            {/* Description */}
            <div className="border-2 border-gray-300 rounded-lg p-4 max-w-[620px]  ">
              <p className="text-black text-2xl  font-light tex-base">
                Safari wears crafted with clean lines and breathable fabrics, blending rugged
                charm with refined sophistication for the modern gentleman.
              </p>
            </div>

          </div>
        </div>

        {/* ── Ratings & Reviews ── */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Ratings & Reviews</h2>

          <div className="flex flex-col md:flex-row gap-10">

            {/* Left — Big score + bars */}
            <div className="flex items-center gap-8 flex-shrink-0">
              {/* Big number */}
              <div>
                <p className="text-9xl font-bold text-gray-900 leading-none">4.5 <span className="text-2xl font-normal">/5</span></p>
              </div>

              {/* Star bars */}
              <div className="flex flex-col gap-2 min-w-[260px]">
                {RATING_BARS.map(({ star, width }) => (
                  <div key={star} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span className="text-xs text-gray-500 w-3">{star}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div className={`${width} bg-gray-900 h-3 rounded-full`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Review card */}
            <div className="flex-1 border border-gray-100 rounded-2xl p-6  max-w-xl shadow-2xl">
              <div className="flex items-start justify-between mb-4">
                <Stars filled={5} />
                {/* Quote icon */}
                <MdOutlineFormatQuote  size={30}/>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                "Thank you for the uniforms. The material selection is spot on, and the quality
                of workmanship is impeccable."
              </p>
              <div className=" border-t-2  border-gray-300 pt-4">
                <p className="text-sm font-bold text-gray-900">Head of School</p>
              </div>
            </div>

          </div>
        </div>

        {/* ── You Might Also Like ── */}
        <div>
          <h2 className="text-3xl sm:text-7xl font-medium text-gray-900 text-center mb-10">
            You Might Also Like
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {RELATED.map((product) => (
              <RelatedCard key={product.id} {...product} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}