import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'

function App() {

  return (
    <>
      <h1>PUPPY BOWL 2024 🏈 ROSTER</h1>
      <NavBar/>
      <div id="main">
        <Routes>
          <Route path="/" element={<AllPlayers/>}/>
          <Route path="/players/:id" element={<SinglePlayer/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
