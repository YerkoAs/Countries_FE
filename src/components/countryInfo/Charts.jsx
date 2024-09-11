import React, { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import useFetch from '../../hooks/useFetch'
import PropTypes from 'prop-types'
import './styles/chart.css'

const Charts = ({ name }) => {
  const [population, getPopulation] = useFetch()
  const [populationData, setPopulationData] = useState()

  useEffect(() => {
    getPopulation('/countries/population')
  }, [])

  useEffect(() => {
    if (population?.data) {
      const countryPop = population?.data.find((item) => item.country === name)
      setPopulationData(countryPop?.populationCounts || [])
    }
  }, [population, name])

  //console.log(populationData)

  return (
    <div className='chart-container'>
      <ResponsiveContainer >
        <LineChart
          data={populationData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="white" />
          <XAxis dataKey="year" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip contentStyle={{ backgroundColor: 'black', color: 'white' }} />
          <Legend wrapperStyle={{ color: 'white' }} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#ffffff"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

Charts.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Charts
