import React from "react";
import s from './FeedBack.module.css';

let FeedBack = () => {
    return (
        <div id="wrapper">
            <div id="articles">
                <form action="" method="post">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="adress@examle.com"/>
                    <label htmlFor="name">Put your name</label>
                    <input type="text" id="name" name="name" placeholder="Name"/>
                    <label htmlFor="message">Write your message</label>
                    <textarea placeholder="Message" id="message" name="message"></textarea>
                    <input className={s.send} type="submit" name="send" value="Gonder"/>
                </form>

            </div>
        </div>
    )
}

export default FeedBack;