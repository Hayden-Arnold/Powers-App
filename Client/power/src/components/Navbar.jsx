import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <Link to='/'>Powers</Link>
      <Link to='/new'>New Profile</Link>
      <Link to='/new'>Profiles</Link>
    </div>
  )
}