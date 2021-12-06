import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/new'>New Profile</Link>
    </div>
  )
}