import React from 'react'
import Navbar from '../Navbart'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div><Navbar></Navbar>
    <Outlet></Outlet>
    </div>
  )
}

export default MainLayout