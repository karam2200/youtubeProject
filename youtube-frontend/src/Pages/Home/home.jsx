import React from 'react'
import SideNavbar from '../../Component/SideNavbar/sideNavbar'
import HomePage from '../../Component/HomePage/homePage'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
        <SideNavbar/>
        <HomePage/>
    </div>
  )
}

export default Home
