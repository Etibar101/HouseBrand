import React from "react";
import s from './Article.module.css'

let  Article = (props) => {
    debugger
    return(
        <div >
            {props.articlesPage.map(a => <div className={s.article} key={a.id}>
                <div>
                    <img className={s.img} src="https://cf.bstatic.com/images/hotel/max1024x768/255/255830738.jpg" alt="photo"/>
                </div>
                <h1>{a.main}</h1>
                <p>{a.text}</p>
                <button>Read more</button>
            </div> )}
        </div>
    )
}

export default Article;