import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./HomePage.css"

const HomePage = () => {
    const [input, setInput] = useState();
    const navigate = useNavigate()

    const submitHandler = () => {
        navigate(`/room/${input}`)
    }
  return (
    <div className="home-container">
    <div className="home-box">
      <h1 className="home-title">Enter Your Name</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Apna naam dalo..."
        className="home-input"
      />
      <button onClick={submitHandler} className="home-button">
        Join Room
      </button>
    </div>
  </div>
  )
}

export default HomePage
