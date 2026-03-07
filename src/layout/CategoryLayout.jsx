import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../static/Header'
import Footer from '../static/Footer'
import CategHero from "../components/categHero"
import PathName from '../components/pathName'
import DropDown from '../components/DropDown'
const CategoryLayout = () => {
  return (
    <div>
        <Header/>
        <CategHero/>
         {/* <PathName />
         <div className="h-px bg-gray-100 mb-6" />

      {/* ── Category Dropdown ── */}
      {/* <div className="mb-8">
        <DropDown />
      </div> */} 
      <Outlet />
      <Footer/>     
    </div>
  )
}

export default CategoryLayout
