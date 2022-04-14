import { Route, Routes } from 'react-router-dom'
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

function App() {
  return (
    <div className="App">
      <Header title="the duirpedia" />
      <section className="container">
        <Routes>
          <Route path="/" element={<Home />} />
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
