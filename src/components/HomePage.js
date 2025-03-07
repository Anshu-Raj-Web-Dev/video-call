import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./HomePage.css"

const HomePage = () => {
    const [input, setInput] = useState();
    const navigate = useNavigate()

    const submitHandler = () => {
      if (!input || input.trim() === "") {
        alert("Please enter a valid room name!");
        return;
      }
      navigate(`/room/${input}`);
    };
    
  return (
    <div className="home-container">
    <div className="home-box">
      <h1 className="home-title">Yooooooooo!!</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Create Room Id"
        className="home-input"
      />
      <button onClick={submitHandler} className="home-button">
        Create Room
      </button>
    </div>
  </div>
  )
}

export default HomePage
