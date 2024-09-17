import React from 'react'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Login from './views/Login'
import Product from './views/Product'
import Register from './views/Register'
import Travel from './views/Travel'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App