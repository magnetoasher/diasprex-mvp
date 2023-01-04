import axios from 'axios'

const API_URL = process.env.REACT_APP_DIASPREX_API_URL
const OPPS_URL = `${API_URL}/opportunities`

const getAllOppsAPI = () => axios.get(`${OPPS_URL}`)

export {getAllOppsAPI}
