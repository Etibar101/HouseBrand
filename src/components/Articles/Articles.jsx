import React from "react";
import Article from "./Article/Article";
import s from './Articles.module.css'
import LogInCenter from "../LogInCenter/LogInCenter";

let Articles = (props) => {
    return(
        <div>
            <div className={s.wrapper}>
                <div className={s.articles}>
                    <Article articlesPage={props.store.articlesPage}/>
                </div>
                <LogInCenter/>
                <div className={s.articles}>
                    <Article articlesPage={props.store.articlesPage}/>
                </div>
                <div className={s.articles}>
                    <Article articlesPage={props.store.articlesPage}/>
                </div>
            </div>
        </div>
    )
}

export default Articles;