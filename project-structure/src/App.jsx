import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './index.css'

import { Home, SignUp } from "./pages"


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      
    </Routes>
  </Router>
  )
  
}

export default App
