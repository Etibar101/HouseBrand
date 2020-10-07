import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from "./components/Navbar/Navbar";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import FeedBack from "./components/FeedBack/FeedBack";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Redirect, Route} from "react-router";

function App(props) {
    return (
        <HashRouter>
            <div className="App">
                <Header />
                <div className='app-wrapper-content'>
                    <Navbar/>
                    <Route exact path='/'
                           render={() => <Redirect to={"/main"}/>}/>
                    <Route path='/main' render={() => <Articles store={props.store}/>}/>
                    <Route path='/about' render={() => <About/>}/>
                    <Route path='/feedback' render={() => <FeedBack/>}/>
                </div>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;
