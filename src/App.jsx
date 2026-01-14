import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import FullMenu from './components/FullMenu'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/full-menu" element={<FullMenu />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
