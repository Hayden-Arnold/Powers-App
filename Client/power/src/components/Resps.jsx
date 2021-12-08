import { Link } from 'react-router-dom'

export default function Resps(props) {

  return (
    <div className="Resps">
      {
        props.resps.map(resp => (
          <Link key={resp.id} to={`/resps/${resp.id}`} className="resps">{resp.fields.name}</Link>
        ))
      }
    </div>
  )
}