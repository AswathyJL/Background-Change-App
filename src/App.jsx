
import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {
    const [changeColor, setChangeColor] = useState('white')

    // Function to change background color
    const handleColorChange = (color) => {
        setChangeColor(color);
    }

  return (
    <div style={{height:'100vh', backgroundColor: changeColor}} className='d-flex justify-content-center align-items-center'>
        <div style={{height:'200px', width:'700px'}} className='center-div d-flex flex-column justify-content-evenly align-items-center rounded-5 shadow'>
            <h1 style={{fontSize:'3rem', fontWeight:'600'}} className='text-primary-emphasis'>Lets Change The Background Color</h1>
            <div className='d-flex justify-content-evenly align-items-center w-100'>
                <button onClick={() => handleColorChange('#FEB1A9')} style={{color:'#FEB1A9', fontSize:'2.5rem'}} className='btn'><i className="fa-solid fa-circle shadow rounded-circle border border-secondary border-3"></i></button>
                <button onClick={() => handleColorChange('#BFB6AE')} style={{color:'#BFB6AE', fontSize:'2.5rem'}} className='btn'><i className="fa-solid fa-circle shadow rounded-circle border border-secondary border-3"></i></button>
                <button onClick={() => handleColorChange('#FEF2CD')} style={{color:'#FEF2CD', fontSize:'2.5rem'}} className='btn'><i className="fa-solid fa-circle shadow rounded-circle border border-secondary border-3"></i></button>
                <button onClick={() => handleColorChange('#CFF2B8')} style={{color:'#CFF2B8', fontSize:'2.5rem'}} className='btn'><i className="fa-solid fa-circle shadow rounded-circle border border-secondary border-3"></i></button>
                <button onClick={() => handleColorChange('#A6D8DB')} style={{color:'#A6D8DB', fontSize:'2.5rem'}} className='btn'><i className="fa-solid fa-circle shadow rounded-circle border border-secondary border-3"></i></button>
                <button onClick={() => handleColorChange('#BD9CF9')} style={{color:'#BD9CF9', fontSize:'2.5rem'}} className='btn'><i className="fa-solid fa-circle shadow rounded-circle border border-secondary border-3"></i></button>
            </div>
        </div>
    </div>
  )
}

export default App
