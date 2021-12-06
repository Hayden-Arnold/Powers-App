import './App.css';
import { useEffect, useState } from 'react'
import { grabResps } from './services/index'
import { Routes, Route } from 'react-router-dom'
import Resps from './components/Resps'
import Navbar from './components/Navbar';
import Resp from './components/Resp'
import Form from './components/Profile'

function App() {
  const [resps, setResps] = useState([])
  const [toggle, setToggle] = useState(false)

useEffect(() => {
  const getAllResps = async () => {
    const response = await grabResps()
    setResps(response)
    console.log(response)
  }
  getAllResps()
}, [toggle])

return (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<Resps resps={resps}/>} />
      <Route path='/new' element={<Form setToggle={setToggle}/>}/>
      <Route path='/resps/:id' element={<Resp resps={resps} setToggle={setToggle}/>}/>
  </Routes>
  </div>
);
}

export default App;