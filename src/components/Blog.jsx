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
                <div key={post.id} className="border w-[300px] shadow-lg text-center flex flex-col rounded-lg p-4">
                    <h2 className="font-bold p-3">{post.title}</h2>
                    <div>
                    <p className="text-sm p-3 break-words">{post.content}</p>
                    </div>
                    <p className="mt-auto text-sm italic">by {post.author}</p>
                </div>
            ))

            }
        </div>
    )
}

export default Blog