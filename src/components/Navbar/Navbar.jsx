import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

let Navbar = (props) => {
    return(
        <div className={s.navbarBlock}>
            <center>
                <div className={s.menu}>Section</div>
                <hr/>
                <div className={s.menuHrefs}>
                    <NavLink className={s.menuHrefs} to={"/about"}>About as</NavLink>
                    <NavLink className={s.menuHrefs} to={"/feedback"}>Feedback</NavLink>
                    <NavLink className={s.menuHrefs} to={"/outh"}>Log in</NavLink>
                    <NavLink className={s.menuHrefs} to={"/reg"}>Sign up</NavLink>
                </div>
            </center>
        </div>
    )
}

export default Navbar;