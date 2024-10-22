import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import WelcomeMessege from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner.jsx";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      {/* {<LoadingSpinner />} */}
      {postList.length === 0 && <WelcomeMessege />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postLoader = async () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log("helooooo");
      return data.posts;
    });
};
export default PostList;
