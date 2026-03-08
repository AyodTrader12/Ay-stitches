import React from 'react'
import heroimg from "../assets/heroImage.png"
const categHero = () => {
  return (
    <div>
       <section className="bg-[#f0efed] overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 flex flex-col-reverse
      md:flex-row items-center md:items-end justify-between min-h-[280px] md:min-h-[410px]">

        {/* ── Left: Model Image ── */}
        <div className="w-78 sm:w-67 md:w-95 flex-shrink-0 justify-center md:items-center mb-6 ">
          <img
     
            src={heroimg}
            alt="AYStitches model"
            className="w-full h-auto object-cover object-top"
          />
        </div>

        {/* ── Right: Text Content ── */}
        <div className="flex-1 py-10 md:py-16 md:pl-20 text-center md:text-left ">

          {/* Collections label with line */}
          <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
            <span className="w-8 h-px bg-gray-800 inline-block font-extrabold md:font-extrabold" />
            <span className="text-gray-800 text-sm font-black tracking-widest italic">
              Collections
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            Explore Our various 
            collection at <br className="hidden sm:block" />Aystitches{" "}
            <span className="text-green-700"></span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 text-sm font-light sm:text-base max-w-md mx-auto md:mx-0 leading-relaxed">
            Discover thoughtfully curated designs crafted for every style,
            occasion, and expression.
          </p>
        </div>

      </div>
    </section>
    </div>
  )
}

export default categHero
