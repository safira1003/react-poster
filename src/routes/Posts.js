import { useState } from "react";
import PostsList from "../components/PostsList.js";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  // const response = await fetch("http://localhost:8080/api/posts");
  const response = await fetch(
    "https://backend-dummy-poster.vercel.app/api/posts"
  );
  const resData = await response.json();
  return resData.posts;
}
