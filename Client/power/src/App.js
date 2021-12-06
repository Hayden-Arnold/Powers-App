import './App.css';
import { useEffect, useState } from 'react'
import { grabResps } from './services/index'
import { Routes, Route } from 'react-router-dom'
import resps from './components/Resps'
import Navbar from './components/Navbar';
import Resp from './components/Resp'
import Form from './components/Profile'

function App() {
  const [Resps, setResps] = useState([])
  const [toggle, setToggle] = useState(false)

useEffect(() => {
  const getAllResps = async () => {
    const response = await grabResps()
    setResps(response)
  }
  getAllResps()
}, [toggle])

return (
  <div className="App">
    <Navbar />
    <Routes>
      <Route
      path='/'
      element={<Resps resps={resps} />} />
      <Route path='/reps/new' element={<Form setToggle={setToggle}/>}/>
      <Route path='/edit/:id' element={<p>{<Form setToggle={setToggle} resps={resps}/>}</p>}/>
      <Route path='/resps/:id' element={<Resp resps={resps} />} />
    </Routes>
  </div>
  );
}

export default App;