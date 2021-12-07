import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div class="nav">
      <Link to='/' class="pow">Powers</Link>
      <Link to='/new' class="new">New Profile</Link>
      <Link to='/current' class="exi">Existing Profiles</Link>
    </div>
  )
}