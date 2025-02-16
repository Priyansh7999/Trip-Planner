import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
export default function Layout() {
  return (
    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
      <div style={{zIndex: 200, width: '100%', height: '70px'}}>
        <NavBar />
      </div>
      <div style={{flex: 1}}>
        <Outlet />
      </div>
      <div style={{position: 'relative', zIndex: 1, width: '100%'}}>
        <Footer />
      </div>
  </div>
  )
}
