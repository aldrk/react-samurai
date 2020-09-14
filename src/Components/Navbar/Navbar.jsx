import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.nav}>
            <nav>
                <NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink>
                <NavLink to="/Dialogs" activeClassName={s.active}>Dialogs</NavLink>
                <NavLink to="/Users" activeClassName={s.active}>Users</NavLink>
                <NavLink to="/News" activeClassName={s.active}>News</NavLink>
                <NavLink to="/Music" activeClassName={s.active}>Music</NavLink>
                <NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink>
            </nav>
        </div>
    );
}

export default Navbar;