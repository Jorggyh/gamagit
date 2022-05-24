import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Repositories from './pages/Repositories'
import Home from './pages/Home'

function RoutesMap() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesMap
