export default function ProductCard({ name, price, image }) {
  return (
    <div className=" bg-white rounded-2xl overflow-hidden border-none
      hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer w-64">

      {/* ── Product Image ── */}
      <div className="relative  aspect-square overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-60 h-60 object-cover object-top
            group-hover:scale-105 transition-transform duration-500"
        />

        {/* New / Hot tag badge */}
        {/* {tag && (
          <span className="absolute top-3 left-3 bg-green-600 text-white
            text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            {tag}
          </span>
        )} */}

        {/* Wishlist button — appears on hover */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow-md
          flex items-center justify-center opacity-0 group-hover:opacity-100
          transition-opacity duration-200 hover:bg-red-50">
          <svg className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Quick view overlay */}
        {/* <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0
          transition-transform duration-300 p-3">
          <button className="w-full bg-black/80 backdrop-blur-sm text-white text-xs
            font-semibold py-2.5 rounded-xl hover:bg-green-700 transition-colors">
            Quick View
          </button>
        </div> */}
      </div>

      {/* ── Product Info ── */}
      <div className="p-3">
        <h3 className="font-bold text-gray-900 text-xs mb-1 truncate">{name}</h3>
        <p className="text-gray-400 text-xs leading-relaxed mb-2 line-clamp-2">
          Beautifully crafted native pieces designed for comfort, confidence, and cultural pride.
        </p>

        {/* Price button */}
        <button className="w-30 bg-gray-900 hover:bg-green-700 text-white
          text-xs font-bold py-2 rounded-md transition-colors duration-200">
          ₦{price.toLocaleString()}
        </button>
      </div>

    </div>
  );
}