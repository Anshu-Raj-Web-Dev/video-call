import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { FaVideo } from "react-icons/fa"; // Video Icon for better UI

const HomePage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    if (!input.trim()) {
      alert("Please enter a valid room name!");
      return;
    }
    navigate(`/room/${input}`);
  };

  // Function to generate a random room ID
  const generateRoomId = () => {
    const randomId = Math.random().toString(36).substring(2, 10);
    setInput(randomId);
  };

  return (
    <div className="home-container">
      <div className="home-box">
        <FaVideo className="home-icon" /> {/* Video Call Icon */}
        <h1 className="home-title">Welcome to Video Chat</h1>
        <p className="home-subtitle">Create or Join a Room to Start Chatting!</p>
        
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter Room ID"
          className="home-input"
        />

        <button onClick={submitHandler} className="home-button">
          Join Room
        </button>

        <button onClick={generateRoomId} className="home-random-button">
          Generate Random Room
        </button>
      </div>
    </div>
  );
};

export default HomePage;
