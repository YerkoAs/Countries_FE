import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/border.css'
import PropTypes from 'prop-types'

const Border = ({ setCountry, countryCode }) => {
  const [flags, getFlags] = useFetch()
  const [borders, getBorders] = useFetch()

  useEffect(() => {
    getBorders(`/countries/CountryInfo/${countryCode}`)
  }, [getBorders, countryCode])

  useEffect(() => {
    getFlags('/countries/flag/images')
  }, [getFlags])

  const handleClick = (border) => {
    setCountry(border)
  }

  const findFlagUrl = (countryName) => {
    const country = flags?.data.find((item) => item.name === countryName)
    return country?.flag
  }

  return (
    <div className="border-container">
      <ul className="border-list">
        {borders?.borders.map((border) => (
          <li
            className="list"
            onClick={() => handleClick(border)}
            key={border.commonName}
          >
            {border.commonName}
            <img className="border-flag" src={findFlagUrl(border.commonName)} />
          </li>
        ))}
      </ul>
    </div>
  )
}

Border.propTypes = {
  setCountry: PropTypes.func.isRequired,
  countryCode: PropTypes.string.isRequired,
}

export default Border
