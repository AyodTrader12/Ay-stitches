import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { label: "Home",       path: "/" },
  { label: "Categories", path: "/category" },
  { label: "About us",   path: "/about" },
];

// ── Reusable NavLink class builder ──────────────────────────────────────────
// NavLink passes { isActive } into the className function automatically.
// Desktop style: green text + green underline when active, gray otherwise.
const desktopLinkClass = ({ isActive }) =>
  `relative text-sm font-semibold pb-1 transition-all duration-200 group
   ${isActive ? "text-green-700" : "text-gray-600 hover:text-green-700"}`;

// Mobile style: pill highlight when active
const mobileLinkClass = ({ isActive }) =>
  `flex items-center gap-3 text-sm font-medium py-3 px-4 rounded-xl transition-colors
   ${isActive
     ? "bg-green-700 text-white font-semibold"
     : "text-gray-700 hover:bg-gray-100"}`;

export default function Header () {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white">

      {/* ── Marquee ticker ── */}
      <div className="bg-black text-white text-[11px] py-1.5 overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-10 animate-marquee">
          {Array(14).fill("✦ New Arrival").map((text, i) => (
            <span key={i} className="uppercase tracking-widest opacity-60">{text}</span>
          ))}
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <nav className="border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between relative">

          {/* Left — desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}   /* "end" prevents "/" matching everything */
                className={desktopLinkClass}
              >
                {({ isActive }) => (
                  <>
                    {link.label}

                    {/* Animated underline bar */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-green-600 rounded-full transition-all duration-300
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />

                    {/* Active dot indicator above the link */}
                    {isActive && (
                      <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-green-600 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Center — Logo (always centered) */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 select-none"
          >
            <div className="w-11 h-11 rounded-full border-2 ">
              <span className="text-white font-bold text-xs tracking-tight leading-none">
                <img src={logo} alt="AYStitches Logo" />
              </span>
            </div>
            {/* <span className="hidden sm:block font-bold text-gray-900 text-base tracking-wide">
              AYStitches
            </span> */}
          </Link>

          {/* Right — icon buttons */}
          <div className="flex items-center gap-1 ml-auto">

            {/* Wishlist */}
            <button className="relative p-2 hover:bg-gray-50 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-red-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">0</span>
            </button>

            {/* Cart */}
            <button className="relative p-2 hover:bg-gray-50 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13M9 19a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
              <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-red-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">0</span>
            </button>

            {/* User */}
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 hover:bg-gray-50 rounded-full transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>

          </div>
        </div>

        {/* ── Mobile dropdown menu ── */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={mobileLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                {({ isActive }) => (
                  <>
                    {/* Sidebar accent bar */}
                    <span className={`w-1 h-5 rounded-full flex-shrink-0 ${isActive ? "bg-white" : "bg-transparent"}`} />
                    {link.label}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

    </header>
  );
}