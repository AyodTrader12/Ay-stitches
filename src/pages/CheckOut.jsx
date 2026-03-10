import { useState } from "react"
import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"
import { MdArrowOutward } from "react-icons/md";
// ── Cart items ──────────────────────────────────────────────
const CART_ITEMS = [
  { id: 1, name: "Bespoke Agbada", price: 120000, size: "M",  colour: "Black",              quantity: 1, image: product1 },
  { id: 2, name: "Safari Wears",   price: 65000,  size: "XL", colour: "Red",                quantity: 1, image: product2 },
  { id: 3, name: "Casual Wears",   price: 40000,  size: "L",  colour: "Pattern Black & White", quantity: 1, image: product3 },
]

const DELIVERY_OPTIONS = [
  { id: "standard", label: "Standard Delivery", sub: "Delivery within 3-7 days",  price: 0 },
  { id: "express",  label: "Express Shipping",  sub: "Delivery within 6-14 days", price: 50000 },
]

// ── Reusable underline input ─────────────────────────────────
function Field({ placeholder, type = "text", className = "" }) {
  return (
    <div className={`relative group ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-gray-950
          focus:border-gray-950 outline-none pb-2 pt-1 text-sm text-gray-950
          placeholder-gray-950  duration-200 text-lg font-sans"
      />
    </div>
  )
}

export default function CheckoutPage() {
  const [delivery, setDelivery] = useState("standard")
  const [agreed, setAgreed] = useState(false)

  const subtotal     = CART_ITEMS.reduce((sum, i) => sum + i.price, 0)
  const deliveryCost = delivery === "express" ? 50000 : 0
  const discount     = 0
  const total        = subtotal + deliveryCost - discount

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

        {/* ── Big CHECKOUT heading ── */}
        <div className="mb-10">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-gray-900 tracking-tight
            flex items-end gap-0 leading-none">
            CHECKOUT
            {/* Arrow icon */}
           <MdArrowOutward size={100}/>
          </h1>
        </div>

        {/* ── Two column layout ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* ══════════════════════════════════════
              LEFT — Form
          ══════════════════════════════════════ */}
          <div className="flex-1 w-full">

            {/* Information label */}
            <h2 className="text-base font-bold text-gray-900 mb-15   tracking-wide">
              Information
            </h2>

            {/* ── Personal Information ── */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-950 mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field placeholder="First Name" />
                <Field placeholder="Last Name" />
                <Field placeholder="Phone number" type="tel" />
                <Field placeholder="Email" type="email" />
              </div>
            </div>

            {/* ── Shipping Information ── */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-950 mb-6">Shipping Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field placeholder="Country / Region" />
                <Field placeholder="City" />
                <Field placeholder="Address" className="sm:col-span-1" />
                <Field placeholder="Zip / Postal code" />
              </div>
            </div>

            {/* ── Agree checkbox ── */}
            <label className="flex items-center gap-2.5 cursor-pointer mb-10 group">
              <div
                onClick={() => setAgreed((a) => !a)}
                className={`w-4 h-4 border-2 rounded flex items-center justify-center
                  flex-shrink-0 transition-colors duration-200
                  ${agreed ? "bg-gray-900 border-gray-900" : "border-gray-400 group-hover:border-gray-600"}`}
              >
                {agreed && (
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-gray-950 select-none">I Agree To Data Processing</span>
            </label>

            {/* ── Delivery ── */}
            <div>
              <h3 className="text-xl font-bold text-gray-950 mb-5">Delivery</h3>
              <div className="flex flex-col gap-1">
                {DELIVERY_OPTIONS.map((option) => (
                  <label
                    key={option.id}
                    onClick={() => setDelivery(option.id)}
                    className={`flex items-center justify-between px-4 py-4 border-b cursor-pointer
                      transition-colors duration-200 group 
                      ${delivery === option.id ? "border-gray-900" : "border-gray-200 hover:border-gray-400"}`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Radio button */}
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                        flex-shrink-0 transition-colors duration-200
                        ${delivery === option.id ? "border-gray-900" : "border-gray-300"}`}>
                        {delivery === option.id && (
                          <div className="w-2 h-2 rounded-full bg-gray-900" />
                        )}
                      </div>
                      <div>
                        <p className={`text-xl font-semibold transition-colors
                          ${delivery === option.id ? "text-gray-950" : "text-gray-950"}`}>
                          {option.label}
                        </p>
                        <p className="text-xs text-gray-950 mt-0.5">{option.sub}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <span className={`text-lg font-light
                      ${delivery === option.id ? "text-black" : "text-gray-950"}`}>
                      {option.price === 0 ? "Free" : `₦${option.price.toLocaleString()}`}
                    </span>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* ══════════════════════════════════════
              RIGHT — Shopping Bag + Summary
          ══════════════════════════════════════ */}
          <div className="w-full lg:w-[420px] flex-shrink-0">

            <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-wide">
              Shopping Bag ({CART_ITEMS.length})
            </h2>

            {/* Cart items */}
            <div className="flex flex-col gap-5 mb-6">
              {CART_ITEMS.map((item) => (
                <div key={item.id} className="flex gap-4">

                  {/* Product image */}
                  <div className="w-34 h-34 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xl font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm font-bold text-gray-900 flex-shrink-0">
                        ₦{item.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-xs text-gray-500 space-y-0.5 border-b-2 border-gray-400 pb-2 ">
                      <p className="flex gap-7"><span className="text-gray-950">Size:</span>     <span className="text-gray-950 font-medium ml-2">{item.size}</span></p>
                      <p className="flex gap-3.5"><span className="text-gray-950">Colour:</span>   <span className="text-gray-950 font-medium ml-2">{item.colour}</span></p>
                      <p><span className="text-gray-950">Quantity:</span> <span className="text-gray-950 font-medium ml-2">{item.quantity}</span></p>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-100 mb-4" />

            {/* Order summary */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm border-b-2 border-gray-400 font-light ">
                <span className="text-gray-950">Shipping:</span>
                <span className="font-light text-gray-950">
                  {deliveryCost === 0 ? "Free" : `₦${deliveryCost.toLocaleString()}`}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm border-b-2 border-gray-400 font-light">
                <span className="text-gray-950">Discount:</span>
                <span className="font-medium text-gray-950">
                  ₦{discount.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm font-bold text-gray-950 pt-2 border-t border-gray-100">
                <span>Total:</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
            </div>

            {/* Pay Now button */}
            <button className="w-full bg-gray-950  text-white font-bold
              py-4 rounded-xl text-sm tracking-wide transition-colors duration-200">
              Pay Now
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}