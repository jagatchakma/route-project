import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostCart from './PostCart';

const Posts = () => {
    const allPost = useLoaderData()
    // console.log(allPost);
    return (
        <div>
            <h1>This is posts page.</h1>
            {

                allPost.map(post => <PostCart key={post.id} post = {post} ></PostCart>)
            }
        </div>
    );
};

export default Posts;