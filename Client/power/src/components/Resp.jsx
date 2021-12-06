import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Resp(props) {
  const [resp, setResp] = useState({})
  const params = useParams()
  useEffect(() => {
    const foundResp = props.resps.find(resp => {
      return resp.id === params.id
    })
    setResp(foundResp)
  }, [params.id, props.resps])

  return (
  <div>
    <h2>{resp?.fields?.title}</h2>
      <p>{resp?.fields?.discord}</p>
      <p>{resp?.fields?.steam}</p>
      <p>{resp?.fields?.steamC}</p>
      <Link to={`/edit/${resp.id}`}></Link>
  </div>
  )
}