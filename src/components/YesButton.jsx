import React from 'react'
import { useNavigate } from 'react-router-dom';

const YesButton = () => {
    const navigate = useNavigate();

    const finalPage = () =>{
        navigate('/final');
    }
  return (
    <button style={{marginRight: '250px'}} onClick={finalPage}>
        Yes
    </button>
  )
}

export default YesButton