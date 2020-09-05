import React from "react";
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={s.nav}>
            <nav>
                <a href="#">Profile</a>
                <a href="#">Messages</a>
                <a href="#">News</a>
                <a href="#">Music</a>
                <a href="#">Settings</a>
            </nav>
        </div>
    );
}

export default Navbar;