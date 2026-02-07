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
        <div className="min-h-screen bg-black p-4 text-white">
            {posts.map(post =>(
                <div key={post.id} className="bg-gray-500">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p>by {post.aurthor}</p>
                </div>
            ))

            }
        </div>
    )
}

export default Blog