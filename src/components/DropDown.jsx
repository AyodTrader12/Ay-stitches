import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const CATEGORIES = [
  { label: "Safari", path: "/category/safari" },
  { label: "Agbada",    path: "/category/agbada" },
  { label: "Blazzers",    path: "/category/blazzers" },
  { label: "corporate & suits", path: "/category/coporate_suit" },
];

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { pathname } = useLocation();

  // Find the currently active category based on URL
  const active = CATEGORIES.find((c) => c.path === pathname);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown whenever the route changes
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <div className="relative inline-block w-auto" ref={ref}>

      {/* ── Trigger button ── */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold
          transition-all duration-200 shadow-sm
          ${open
            ? "border-gray-900 bg-gray-900 text-white"
            : "border-gray-200 bg-white text-gray-700 hover:border-gray-900 hover:text-gray-900"
          }`}
      >
        {/* Grid icon */}
        <svg
          className={`w-4 h-4 flex-shrink-0 ${open ? "text-white" : "text-green-600"}`}
          viewBox="0 0 24 24" fill="currentColor"
        >
          <rect x="3"  y="3"  width="4" height="4" rx="0.8" />
          <rect x="10" y="3"  width="4" height="4" rx="0.8" />
          <rect x="17" y="3"  width="4" height="4" rx="0.8" />
          <rect x="3"  y="10" width="4" height="4" rx="0.8" />
          <rect x="10" y="10" width="4" height="4" rx="0.8" />
          <rect x="17" y="10" width="4" height="4" rx="0.8" />
          <rect x="3"  y="17" width="4" height="4" rx="0.8" />
          <rect x="10" y="17" width="4" height="4" rx="0.8" />
          <rect x="17" y="17" width="4" height="4" rx="0.8" />
        </svg>

        <span className="text-green-600">{active ? active.label : "Category"}</span>

        {/* Chevron — rotates when open */}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* ── Dropdown panel ── */}
      {open && (
        <div className="absolute top-full left-0 mt-2 w-46 bg-white border border-gray-100
          rounded-2xl shadow-2xl z-50 overflow-hidden">

          {/* Header label inside dropdown */}
          <div className="px-4 pt-3 pb-2 border-b border-gray-100">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Browse Category
            </p>
          </div>

          {/* ── NavLink options ── */}
          <div className="p-2 flex flex-col gap-1">
            {CATEGORIES.map((cat) => (
              <NavLink
                key={cat.path}
                to={cat.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                   transition-all duration-150
                   ${isActive
                     ? "bg-gray-900 text-white font-semibold"         // ← black pill when active
                     : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                   }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Dot indicator */}
                    <span className={`w-2 h-2 rounded-full flex-shrink-0
                      ${isActive ? "bg-white" : "bg-gray-300"}`}
                    />

                    <span className="flex-1">{cat.label}</span>

                    {/* Checkmark when active */}
                    {isActive && (
                      <svg className="w-4 h-4 ml-auto flex-shrink-0" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}

 
export default DropDown