import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import './App.css'
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Blog/>
    </>
  )
}

export default App
