import axios from 'axios'


export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/powers`
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}

export const grabResps = async () => {
  const response = await axios.get(baseURL, config)
  console.log(response.data.records)
  return response.data.records
}

export const postResp = async (yes) => {
  const response = await axios.post(baseURL, { fields: yes }, config)
  return response.data
}