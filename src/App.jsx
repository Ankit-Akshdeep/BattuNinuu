import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Router, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import Game from './components/game'
import FinalPage from './components/FinalPage'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<Game />} />
          <Route path="/final" element={<FinalPage imgSrc=".\assets\ninuuheart.png" title="Yaaaayyyyy!She does love Battu!❤️" />} />
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
