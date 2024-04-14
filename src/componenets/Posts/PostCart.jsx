import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PostCart.css'

const PostCart = ({ post }) => {
    const navigate = useNavigate();
    const withButton = ()=> {
navigate(`/posts/${post.id}`)
    }
    return (
        <div className='postCart'>
            <p>lost cart: {post.id}</p>
            <p>title: {post.title}</p>
            <Link to={`/posts/${post.id}`}> show detail by link</Link>
            <button onClick={withButton}>shoe details</button>
        </div>
    );
};

export default PostCart; <p>lost cart</p>