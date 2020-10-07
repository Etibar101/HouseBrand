import React from "react";
import facebookLogo from "../../assets/img/Facebool.png";
import s from "./Footer.module.css"


let Footer = () =>{
    return(
        <footer className={s.footer}>
            <span className="left">Butun huquqlar qorunur &copy; 2019</span>
            <span className={s.right}> Facebook
        <img src={facebookLogo} alt="Facebook" title="Facebook"/>
      </span>

        </footer>
    )
}

export default Footer;