import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './SinglePost.css'

const SinglePost = () => {

    const singleData = useLoaderData()
    // console.log(singleData);

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
    return (
        <div className='containerbody'>
            <h1>hello </h1>
            <h2>{singleData.id}</h2>
            <p>Title: {singleData.title}</p>
            <p>body: {singleData.body}</p>
            <button onClick={goBack}>go back</button>
        </div>
    );
};

export default SinglePost;