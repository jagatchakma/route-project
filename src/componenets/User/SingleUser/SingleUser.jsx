import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const SingleUser = () => {
    const data = useLoaderData()
    // console.log(data);
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <p>This is user details apge: {data.username}</p>
            <button onClick={goBack}>go back</button>
        </div>
    );
};

export default SingleUser;