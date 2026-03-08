import { Outlet } from 'react-router-dom'
import Header from '../static/Header'
import Footer from '../static/Footer'
import CategHero from '../components/categHero'
import PathName from '../components/pathName'
import DropDown from '../components/DropDown'

const CategoryLayout = () => {
  return (
    <div>
      <Header />
      <CategHero />

      <div className="max-w-7xl mx-auto px-2 sm:px-4 pb-20">

        {/* ── path_name ── */}
        <PathName />

        {/* ── Divider ── */}
        <div className="h-px bg-gray-100 mb-6" />

        {/* ── Grid: dropdown in slot 1, Outlet fills the rest ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 place-items-center sm:place-items-start md:ml-5">

          {/* Slot 1 — Dropdown stays here across all category pages */}
          <div className="relative">
            <DropDown />
          </div>

          {/* Slots 2+ — Each category page renders its own product cards here */}
          <Outlet />

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CategoryLayout