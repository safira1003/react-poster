import { useLoaderData } from "react-router-dom";

import Post from "./Post.js";
import classes from "./PostsList.module.css";

function PostsList(props) {
  const posts = useLoaderData();

  // function addPostHandler(postData) {

  //   // important (updating states if its depend on previous state snapshot)
  //   // setPosts([postData, ...posts]); Wrong
  //   setPosts((existingPost) => [postData, ...existingPost]);
  // }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                author={post.author}
                body={post.body}
              />
            );
          })}
        </ul>
      )}

      {posts.length == 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no post yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
