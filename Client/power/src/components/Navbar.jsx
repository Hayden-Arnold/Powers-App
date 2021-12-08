import { Link } from 'react-router-dom'

export default function Navbar() {
  
  return (
    <div className="nav">
      <li className="git">
      <a href="https://github.com/Hayden-Arnold">Github</a>
      <a href="https://www.linkedin.com/in/hayden-arnold-503997222/">Linkden</a>
      </li>
      <br />
      <br />
      
      <br />
      <Link to='/' className="pow">Powers</Link>
      <br />
      <br />
      <Link to='/new' className="new">New Profile</Link>
      <Link to='/current' className="exi">Existing Profiles</Link>
    </div>
  )
}