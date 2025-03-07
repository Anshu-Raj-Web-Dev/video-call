import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [tempId, setTempId] = useState(""); // Temporary ID for animation

  const navigate = useNavigate();

  const submitHandler = () => {
    if (!input.trim()) {
      alert("Please enter a valid room name!");
      return;
    }
    navigate(`/room/${input}`);
  };

  const generateRoomId = () => {
    setLoading(true);
    setInput(""); // Clear input before generating

    let interval = setInterval(() => {
      setTempId(Math.random().toString(36).substring(2, 10));
    }, 300); // Change temp ID every 300ms

    setTimeout(() => {
      clearInterval(interval); // Stop changing temp ID
      const finalId = Math.random().toString(36).substring(2, 10);
      setInput(finalId);
      setTempId(""); // Clear temp ID
      setLoading(false);
    }, 2000); // Show animation for 2s
  };

  return (
    <div className="home-container">
      <div className="home-box">
        <h1 className="home-title">
          Welcome to <span>"IDK"</span>
        </h1>
        <p className="home-subtitle">Create or Join a Room to Start Talking!</p>

        <div className="input-container">
          <input
            value={loading ? tempId : input} // Show tempId during loading, input otherwise
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter Room ID"
            className="home-input"
            readOnly={loading} // Prevent typing when generating
          />
        </div>

        <button onClick={submitHandler} className="home-button" disabled={loading}>
          Join Room
        </button>
        <button onClick={generateRoomId} className="home-random-button" disabled={loading}>
          {loading ? "Generating..." : "Generate Random Room"}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
