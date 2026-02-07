import { useEffect, useState } from "react"
import {collection, getDocs} from "firebase/firestore"
import { db } from "../firebase"
function Blog(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "posts"));
            const postsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPosts(postsData);
        };
        fetchPosts();
    })
    return(
        <div className="bg-white p-4 text-black">
            {posts.map(post =>(
                <div key={post.id} className="bg-gray-300 w-[300px] shadow-lg text-center mx-auto rounded-lg p-4">
                    <h2 className="font-bold p-3">{post.title}</h2>
                    <p className="text-sm p-3">{post.content}</p>
                    <p>by {post.aurthor}</p>
                </div>
            ))

            }
        </div>
    )
}

export default Blog