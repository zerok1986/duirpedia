import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import { Films } from './pages/Films'
import { People } from './pages/People'
import { Planets } from './pages/Planets'
import { Spieces } from './pages/Spieces'
import { Starships } from './pages/Starships'
import { Vehicles } from './pages/Vehicles'
import getData from './utils/ApiHandler'

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    let mounted = true
    getData().then((data) => {
      if (mounted) {
        setData(data)
      }
    })
    return () => (mounted = false)
  }, [])

  return (
    <div className="App">
      <Header title="the duirpedia" />
      <section className="container">
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="Films" element={<Films />} />
          <Route path="People" element={<People />} />
          <Route path="Planets" element={<Planets />} />
          <Route path="Spieces" element={<Spieces />} />
          <Route path="Starships" element={<Starships />} />
          <Route path="Vehicles" element={<Vehicles />} />
        </Routes>
      </section>
      <Navbar />
    </div>
  )
}

export default App
