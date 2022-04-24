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
import SWAPIService from './services/ApiHandler'


function App() {
  const category = window.location.pathname.substring(1)
  const [data, setData] = useState({})

  useEffect(() => {
    SWAPIService
      .getRoot()
      .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      <Header title="the duirpedia" />
      <section className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="films" element={<Films />} />
          <Route path="people" element={<People />} />
          <Route path="planets" element={<Planets />} />
          <Route path="spieces" element={<Spieces />} />
          <Route path="starships" element={<Starships />} />
          <Route path="vehicles" element={<Vehicles />} />
        </Routes>
      </section>
      <Navbar />
    </div>
  )
}

export default App
