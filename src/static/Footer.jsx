import { NavLink } from "react-router-dom";
import logo from "../assets/footerLogo.png";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const  Footer = () => {
   
const COMPANY_LINKS = [
  { label: "Home",       path: "/" },
  { label: "Categories", path: "/category" },
  { label: "About Us",   path: "/about" },
];

  return (
    <footer className="bg-black text-white">

      {/* ── Main footer content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className=" flex flex-col items-center  gap-10 md:flex-row md:justify-between">

          {/* ── Col 1: Brand ── */}
          <div className="  col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full  flex items-center justify-center flex-shrink-0">
             <img src={logo} alt="AYStitches Logo" />
              </div>
              <span className="font-bold text-lg tracking-wide">AYStitches</span>
            </div>
        
          </div>

          {/* ── Col 2: Contact ── */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white mb-5">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
               
                <a href="mailto:info@aystitchesbrand.com"
                  className="text-sm text-white font-light md:font-light hover:text-green-400 transition-colors break-all">
                  info@aystitchesbrand.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                
                <a href="tel:+2348062396707"
                  className="text-sm text-white font-light md:font-light hover:text-green-400 transition-colors">
                  +234 806 239 6707
                </a>
              </li>
            </ul>
          </div>

          {/* ── Col 3: Company links ── */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    end={path === "/"}
                    className={({ isActive }) =>
                      `text-sm transition-colors flex items-center gap-2 group
                       ${isActive ? "text-green-400 font-light" : "text-gray-300 hover:text-green-400"}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {/* Small arrow — slides in on active/hover */}
                        {/* <svg
                          className={`w-3 h-3 transition-all duration-200
                            ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg> */}
                        {label}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Terms + Socials ── */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white mb-5">
              Terms & Policies
            </h4>
            <ul className="space-y-3 mb-8">
              <li className="font-light text-white">policy privacy</li>
              <li className="font-light text-white">Terms & conditions</li>
            </ul>

            {/* Social icons */}
            <h4 className="text-xs font-semibold tracking-widest text-white mb-4">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
           <span><FaYoutube /></span>
           <span><FaFacebook /></span>
           <span><AiFillInstagram /></span>

            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom copyright bar ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row
          items-center justify-center gap-1 text-center">
          <p className="text-xs text-white">
            © {new Date().getFullYear()} AY Stitches. All rights reserved
          </p>
        </div>
      </div>

    </footer>
  );
}


export default Footer