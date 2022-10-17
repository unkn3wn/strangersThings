import "./App.css";
import Homepage from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Posts from "./components/Post"

// import { useState, useEffect} from "react"

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Post/Posts" element={<Posts/>} />
      </Routes>
      <Navbar />

    </div>
  )
}

export default App;
