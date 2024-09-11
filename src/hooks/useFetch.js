import axios from 'axios'
import { useCallback, useState } from 'react'

const useFetch = () => {
  const [apiData, setApiData] = useState()
  const baseUrl = 'http://localhost:8080/api/v1'

  const getApi = useCallback(async (path) => {
    const url = `${baseUrl}${path}`
    try {
      const response = await axios.get(url)
      setApiData(response.data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return [apiData, getApi]
}

export default useFetch
