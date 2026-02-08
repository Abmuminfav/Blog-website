import back from "../assets/back.jpg"
import Blog from "./Blog";
import Blogcont from "./Blongcont";
import Navbar from "./Navbar";

function Home(){
    return(
        <>
        <div className="bg-cover bg-center h-100" style={{backgroundImage: `url(${back})`}}>
            <div className="text-black h-full max-w-[1280px] mx-auto flex flex-col justify-center p-4">
                <h1 className="font-bold text-3xl">Everything Blockchain.</h1>
                <h4 className="font-semibold">Publication For blog Posts</h4>
                <p>multiple blog post by various races.</p>
            </div>
        </div>
        <Blogcont/>
        </>
    )
}

export default Home;