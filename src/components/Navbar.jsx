import { useState } from "react"
import { Link } from "react-router-dom"
import { IoClose } from "react-icons/io5";
import { TbMenu3 } from "react-icons/tb";

function Navbar(){
    const [open, setOpen] =useState(false);
    return(
        <div className="backdrop-blur-md">
       <nav className="max-w-[1280px] mx-auto flex justify-between text-black p-4">
        <h1 className="font-bold text-4xl">BlockTalk</h1>
        <ul className="hidden md:flex gap-6 items-center">
             <li><Link to="/">Home</Link></li>
             <li><Link to="/Create">Create Post</Link></li>
             <li><Link to="/About">About</Link></li>
             <li><Link to="/Donate">
                <button className="border-[#FB015A] p-2 rounded-sm bg-black text-white">Donate Now</button>
                </Link></li>
        </ul>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>{open ? <IoClose/> : <TbMenu3/>}</button>
        <div className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg shadow-md transition-all duration-300 overflow-hidden ${open ? "max-h-96" : "max-h-0"}`}>
            <ul className="flex flex-col gap-6 text-white p-2">
                <li onClick={() => setOpen(false)}><Link to="/">Home</Link></li>
                <li onClick={() => setOpen(false)}><Link to="/Create">Create Post</Link></li>
                <li onClick={() => setOpen(false)}><Link to="/About">About</Link></li>
                <li onClick={() => setOpen(false)}><Link to="/Donate">
                <button className="border-[#FB015A] p-2 rounded-sm bg-gray-500 text-white">Donate Now</button>
                </Link></li>
             </ul>
        </div>
       </nav>
       </div>
    )
}

export default Navbar