import { useState, useEffect } from 'react'
import { postResp } from '../services'
import { useNavigate, useParams } from 'react-router-dom'

export default function Form(props) {
  const [name, setName] = useState('')
  const [discord, setDiscord] = useState('')
  const [steam, setSteam] = useState('')
  const [code, setCode] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const foundResp = props.resps?.find(resp => {
      return resp.id === params.id
    })
    if (foundResp) {
      setName(foundResp.fields.title)
      setDiscord(foundResp.fields.discord)
      setSteam(foundResp.fields.steam)
      setCode(foundResp.fields.code)
    }
  }, [params.id, props.resps])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newResp = {
      name,
      discord,
      steam,
      code
    }
    const response = await postResp(newResp)
    props.setToggle(prevToggle => !prevToggle)
    if (response) {
      navigate('/current')
      // Will change this ^ (navigate('/'))
    }
}
return (
  <form onSubmit={handleSubmit} className="newpro">
    <h2>New Profile</h2>
    <p>Name:</p>
    <input
      type='text'
      value={name}
      name='Name:'
      onChange={(e) => setName(e.target.value)}
    />
    <p>Discord:</p>
    <input
      type='text'
      value={discord}
      name='Discord:'
      onChange={(e) => setDiscord(e.target.value)}
    />
    <p>Your Steam:</p>
    <input
      type='text'
      value={steam}
      name='Steam:'
      onChange={(e) => setSteam(e.target.value)}
    />
    <p>Steam Code:</p>
    <input
      type='text'
      value={code}
      name='Steam Code:'
      onChange={(e) => setCode(e.target.value)}
    />
    <br />
    <button>Submit :D</button>
  </form>
  )
}