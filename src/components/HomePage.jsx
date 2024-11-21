import React from 'react'
import {useNavigate} from 'react-router-dom'
const HomePage = () => {
  const navigate = useNavigate();
  const newPage = () =>{
    navigate('/game');
  }
  return (
    <>
    <div>Hey! Welcome to Battu Ninuu website 🥰</div>
    <button    
    onClick={newPage}>Click here to play the game !</button>
    </>
  )
}

export default HomePage