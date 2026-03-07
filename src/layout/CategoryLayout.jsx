import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../static/Header'
import Footer from '../static/Footer'
import CategHero from "../components/categHero"
const CategoryLayout = () => {
  return (
    <div>
        <Header/>
        <CategHero/>
      <Outlet />
      <Footer/>     
    </div>
  )
}

export default CategoryLayout
