import axios from 'axios'


export const BASE_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/powers`
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}

export const grabResps = async () => {
  const response = await axios.get(BASE_URL, config)
  return response.data.records
}

export const postResp = async (yes) => {
  const response = await axios.post(BASE_URL, { fields: yes }, config)
  return response.data
}