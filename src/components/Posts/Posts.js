import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {posts.map( i => {
        const post = i
        console.log(post)
        return <div className="post" key={post.call}>{post.call}</div>
        })}
      {/* Check the implementation of Post to see what props it requires! */}
      <Post likePost={likePost} />
    </div>
  );
};

export default Posts;
