import axios from 'axios'

const intance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    Accept: 'application/json',
  },
})

export default intance