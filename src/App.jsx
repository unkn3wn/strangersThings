import "./App.css";
import Homepage from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Posts from "./components/Post"
import Login from "./components/Login"

// import { useState, useEffect} from "react"

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/post" element={<Posts/>} />
        <Route path="/Login" element={<Login/>}/>
      </Routes>
     

    </div>
  )
}

export default App;
