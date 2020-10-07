import React from "react";
import s from './Article.module.css'

let  Article = (props) => {
    debugger
    return(
        <div >
            {props.articlesPage.map(a => <div className={s.article} key={a.id}>
                <div>
                    <img className={s.img} src="https://i.pinimg.com/originals/0b/7e/8a/0b7e8a02ed3c2d3611675f678fecead9.jpg" alt="photo"/>
                </div>
                <h1>{a.main}</h1>
                <p>{a.text}</p>
                <button>Read more</button>
            </div> )}
        </div>
    )
}

export default Article;