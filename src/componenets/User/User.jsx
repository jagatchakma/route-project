import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';

const User = () => {
    const datas = useLoaderData()

    // console.log(datas);
    return (
        <div>
            {
                datas.map(data => <Cart data={data} key={data.id}></Cart>)
            }
        </div>
    );
};

export default User;