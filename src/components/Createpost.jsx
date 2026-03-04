import { useState } from "react";
import { db } from "../firebase"; // adjust path
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Createpost() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!author || !title || !content) {
      alert("Please fill in all fields");
      return;
    }

   await addDoc(collection(db, "posts"),{
    author: author,
    title: title,
    content: content,
    createdAt: serverTimestamp()
   })

    setAuthor("");
    setTitle("");
    setContent("");
  }

  return (
    <div className="text-black max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Create Post
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="author" className="block mb-1 font-semibold">
            Author
          </label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="title" className="block mb-1 font-semibold">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="content" className="block mb-1 font-semibold">
            Content
          </label>
          <textarea
            id="content"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border p-2 rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Createpost;