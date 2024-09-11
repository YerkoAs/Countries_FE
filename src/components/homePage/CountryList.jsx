import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import './styles/countryList.css'

const CountryList = ({ country }) => {
  //console.log(country)

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/countryInfo', { state: { country } })
  }

  return (
    <div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-element" onClick={handleClick}>
            {country.name}
          </li>
        </ul>
      </nav>
    </div>
  )
}

CountryList.propTypes = {
  country: PropTypes.object.isRequired,
}

export default CountryList
