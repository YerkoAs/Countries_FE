import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import Charts from '../components/countryInfo/Charts'
import Border from '../components/countryInfo/Border'
import './styles/countryInfo.css'
import { motion } from 'framer-motion'
import { animation } from '../components/animation/animation'

const CountryInfo = () => {
  //console.log(change)

  const location = useLocation()

  const [country, setCountry] = useState(location.state?.country || {})
  const navigate = useNavigate()
  const [flags, getFlags] = useFetch()

  useEffect(() => {
    getFlags('/countries/flag/images')
  }, [])

  const handleClick = () => {
    navigate('/')
  }

  //console.log(country.name)
  const countryCode = country?.countryCode

  // console.log(flags?.data)

  const name = country?.name ? country?.name : country?.commonName
  console.log(name)

  const findFlagUrl = (countryName) => {
    const country = flags?.data.find((item) => item.name === countryName)
    return country?.flag
  }

  const flagUrl = findFlagUrl(name)

  //console.log(flagUrl);

  return (
    <div className="info-container">
      <div className="secondary-container">
        <button onClick={handleClick}>Home</button>
        <div className="info-part-1">
          <h1>{country?.name ? country?.name : country?.commonName}</h1>
          <img src={flagUrl} alt="country-flag-image" />
        </div>
        <hr />
        <motion.h2
          variants={animation('right', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="border-tittle"
        >
          Neighboring countries....
        </motion.h2>

        <Border setCountry={setCountry} countryCode={countryCode} name={name} />
        <h2 className="chart-tittle">Population data chart</h2>
        <motion.div
          variants={animation('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Charts name={name} />
        </motion.div>
        <h3 className="chart-info">years vs population</h3>
      </div>
    </div>
  )
}

export default CountryInfo
