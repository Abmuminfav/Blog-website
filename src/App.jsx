import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import './App.css'
import Navbar from "./components/Navbar";
import Createpost from "./components/Createpost";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Createpost" element={<Createpost/>}/>
      </Routes>
    </>
  )
}

export default App
