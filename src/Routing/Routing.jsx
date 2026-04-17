import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Dashboard from '../Components/Dashboard/Dashboard'

const Routing = () => {
      return (
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
      )
}

export default Routing