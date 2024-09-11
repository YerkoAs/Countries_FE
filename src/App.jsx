import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CountryInfo from './pages/CountryInfo'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/countryInfo" element={<CountryInfo />} />
    </Routes>
  )
}

export default App
