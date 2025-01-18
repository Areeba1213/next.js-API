// "use client"
// import { useState , useEffect } from "react"
// import { setHeapSnapshotNearHeapLimit } from "v8"

// export default function FetchPostPage(){
//     const [posts, setPosts]= useState([])
//     const [error,setError] = useState("")
//     const [loading, setLoading] = useState(true)
// }



// useEffect(() => {
//     fetch("/api/external")
//     .then((res) => res.json())
//      .then((data) => {
//         if(data.success){
//             setPost(data.data)

//         }else{
//             setError(data.message)
//         }
//      })
//      .catch((err) => setError("An expected error"))
//       .finally(() => setLoading(false))
// },[])

// return(
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map((post: {id: number; tittle: string; body:string})
//         => (
//             <li key={post.id}>{post.tittle}</li>
//         ))}
//       </ul>
//     </div>
// )


// function setPost(data: any) {
//     throw new Error("Function not implemented.")
// }

// function setError(message: any) {
//     throw new Error("Function not implemented.")
// }

// function setLoading(arg0: boolean): void {
//     throw new Error("Function not implemented.")
// }


"use client";

import { useState, useEffect } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function FetchPostPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/external")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPosts(data.data); // Correct setter function
        } else {
          setError(data.message);
        }
      })
      .catch(() => setError("An unexpected error occurred."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
