import React from "react";
import s from './header.module.css';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header className={s.header}>
            <span>
                <span>
                    <NavLink to={'/main'} title="Na glavnuyu" className={s.logo}>HouseBrand</NavLink>
                </span>
                <span>
                    <NavLink to={'/about'} title="Haqqimizda" className={s.contact}>About as</NavLink>
                </span>
            </span>
            <span>
                <input type="text" className={s.field} placeholder="Search"/>
            </span>
            <span className={s.right}>
        <span>
          <a className={s.contact} href="#" title="Sign up">Sign up</a>
        </span>
        <span>
          <a className={s.contact} href="#" title="Log in">Log in</a>
        </span>
      </span>
        </header>
    )

}

export default Header;