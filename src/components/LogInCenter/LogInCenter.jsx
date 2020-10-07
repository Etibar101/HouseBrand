import React from "react";
import s from "./LogInCenter.module.css"

let LogInCenter = () => {
    return(
        <div className={s.main_soc_block} >
            <center>
                <div className={s.main_soc_block_in}>
                    <h3>Register on the site</h3>
                    <p>Only we have the most beautiful products!</p>
                    <button >Sign in</button>
                </div>
            </center>
        </div>
    )
}

export default LogInCenter;