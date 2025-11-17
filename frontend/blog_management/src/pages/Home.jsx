import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Search from './../components/Search';

function Home() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Home
