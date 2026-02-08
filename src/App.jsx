import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import './App.css'
import Navbar from "./components/Navbar";
import Create from "./components/Create";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </>
  )
}

export default App
