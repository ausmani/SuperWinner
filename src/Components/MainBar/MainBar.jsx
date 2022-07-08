// @flow
import * as React from 'react';
import flag from "./uk16px.png";

const MainBar = () => {
    return (
        <div className="main-banner">
            <header>
                <ul>
                    <li>

                        <a href="/"> <img src={flag} alt="logo" style={{height:'14px'}}/>
                            <span className="langua"> ENG / EUR</span>
                        </a>
                    </li>
                    <li>
                        <i className="fa fa-user"></i>
                        <a href="/">Register /</a>
                        <a href="/">Login</a>
                    </li>
                </ul>
            </header>
            <div className="banner-info align-middle">
                <h1>
                    <span>Play Simple!</span>
                    <br/>
                        Play Simple, Play Unlimited
                </h1>
                <p>Dive into a huge selection of jackpots<br/> from around the world!</p>
                <button type="text" className="get-started">Get Started</button>
            </div>
        </div>
    );
};

export default MainBar;