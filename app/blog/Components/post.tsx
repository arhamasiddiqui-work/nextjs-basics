"use client";
import Link from "next/link";
import { use } from "react";

const Posts = ({ promise }) => {
    // console.log('client component')
  const posts = use(promise);
  return (
    <div className="flex gap-4 flex-wrap">
      {posts.map((post) => {
        return (
          <div className="border p-2">
            <Link href={`/blog/${post.id}`}>
              <h1 className="text-fuchsia-500">{post.title}</h1>
            </Link>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Posts;
