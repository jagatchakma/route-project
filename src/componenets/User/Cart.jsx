import React from 'react';
import './Cart.css'
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({data}) => {
    const {id, name, username, email} = data;

    const navigate = useNavigate()

    const onClickedNav = ()=> {
        navigate(`/users/${id}`)
    }

    return (
        <div className='cart'>
            <h2>{id}</h2>
            <p>Name: {name}</p>
            <p>UserName: {username}</p>
            <p>Email: {email}</p>         
            <Link to={`/users/${id}`}>Show details</Link>
            <button onClick={onClickedNav}>Details with button</button>
        </div>
    );
};

export default Cart;