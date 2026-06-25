import Posts from "./Components/post";
import { Suspense } from "react";

export default async function BlogPage() {
  // console.log('server component')
  
  //fetching api database call,
  // const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts = await data.json();

  // const posts = [
  //   {
  //     id: 1,
  //     title: "post 1",
  //     body: "post 1 body",
  //   },
  //   {
  //     id: 2,
  //     title: "post 2",
  //     body: "post 2 body",
  //   },
  // ];

  const promise = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json(),
  );
  return (
    <div>
      <p>Blog Posts</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Posts promise={promise} />
      </Suspense>
    </div>
  );
}
