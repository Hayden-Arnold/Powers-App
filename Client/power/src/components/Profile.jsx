import { useState, useEffect } from 'react'
import { postResp } from '../services'
import { useNavigate, useParams } from 'react-router-dom'

export default function Form(props) {
  const [title, setTitle] = useState('')
  const [discord, setDiscord] = useState('')
  const [steam, setSteam] = useState('')
  const [steamC, setSteamC] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const foundResp = props.resps?.find(resp => {
      return resp.id === params.id
    })
    if (foundResp) {
      setTitle(foundResp.fields.title)
      setDiscord(foundResp.fields.discord)
      setSteam(foundResp.fields.steam)
      setSteamC(foundResp.fields.steamC)
    }
  }, [params.id, props.resps])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newResp = {
      title,
      discord,
      steam,
      steamC
    }
    const response = await postResp(newResp)
    props.setToggle(prevToggle => !prevToggle)
    if (response) {
      navigate('/')
      // Will change this ^ (navigate('/'))
  }
}
return (
  <form onSubmit={handleSubmit}>
    <h1>New Profile</h1>
    <input
      type='text'
      value={title}
      name='Name:'
      onChange={(e) => setTitle(e.target.value)}
    />
    <input
      type='text'
      value={discord}
      name='Discord:'
      onChange={(e) => setDiscord(e.target.value)}
    />
    <input
      type='text'
      value={steam}
      name='Steam:'
      onChange={(e) => setSteam(e.target.value)}
    />
    <input
      type='text'
      value={steamC}
      name='Steam Code:'
      onChange={(e) => setSteamC(e.target.value)}
    />
    <button>Submit :D</button>
  </form>
  )
}