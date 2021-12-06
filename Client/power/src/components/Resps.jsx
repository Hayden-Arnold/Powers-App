import { Link } from 'react-router-dom'

export default function Resps(props) {

  return (
    <div>
      {
        props.resps.map(resp => (
          <Link key={resp.id} to={`/resps/${resp.id}`}>{resp.fields.name}</Link>
        ))
      }
    </div>
  )
}