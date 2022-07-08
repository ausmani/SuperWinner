// @flow
import * as React from 'react';
import tempImg from "../../assets/images/3.png";

const Jackpots = () => {
    return (
        <div className="life-jackpot">
            <img className="fish-man" src={tempImg} alt="man"/>
            <div className="banner-info2">
                <h1>
                    <span>Play Now For</span>
                    <br/>
                        Life-changing jackpot
                </h1>
                <button type="text" className="get-started2">Sign In</button>
                <a href="/">Sign Up now, It's <span>totally free!</span></a>
            </div>
        </div>
    );
};

export default Jackpots;