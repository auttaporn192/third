import { useState, useEffect } from 'react'
import axios from 'axios'

function useFetch(url) {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const res = await axios.get(url)

    setData(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [url])
//console.log(data)
  return data
}

export default useFetch
