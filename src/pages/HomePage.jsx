import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import CountryList from '../components/homePage/CountryList'
import './styles/homePage.css'

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [countries, getCountries] = useFetch()

  useEffect(() => {
    getCountries('/countries/AvailableCountries')
  }, [])

  useEffect(() => {
    if (countries) {
      setFilteredCountries(countries)
    }
  }, [countries])

  const [filteredCountries, setFilteredCountries] = useState(countries)
  //console.log(countries)

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase()
    setSearchQuery(query)

    if (query === '') {
      setFilteredCountries(countries)
    } else {
      const filtered = countries.filter((country) =>
        country.name.toLowerCase().includes(query)
      )
      setFilteredCountries(filtered)
    }
  } 

  return (
    <div className="home">
      <div className="container">
        <div className="list-container">
          <div className="input-container">
            <input
              className="input"
              type="text"
              placeholder="Search by country name..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          {filteredCountries?.map((country) => (
            <CountryList key={country.name} country={country} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
