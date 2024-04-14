import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css'

const Header = () => {
    return (
        <div className='activelink'>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
            <ActiveLink to='/users'>Users</ActiveLink>
            <ActiveLink to='/posts'>Post list</ActiveLink>

        </div>
    );
};

export default Header;