// @flow
import * as React from 'react';
import logo from "../../assets/images/logo.png";
import eplus from "../../assets/images/18-plus.PNG";

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col-sm-5 play-simple">
                    <h5>Play Simple!<br/>
                        other sites, just a<br/>load of balls</h5>
                    <p>Play over 100 lotteries from around the world at the click of a button</p>
                </div>

                <div className="col-sm-2 playes-info">
                    <h6>Players</h6>
                    <ul>
                        <li><a href="/">Create ans Account</a></li>
                        <li><a href="/">Login to your Account</a></li>
                        <li><a href="/">All Lotteries</a></li>
                    </ul>
                </div>

                <div className="col-sm-2 playes-info">
                    <h6>Information</h6>
                    <ul>
                        <li><a href="/">News & Blog</a></li>
                        <li><a href="/">About Supper Winners</a></li>
                        <li><a href="/">Help & Contact</a></li>
                        <li><a href="/">Responsible Gambling</a></li>
                        <li><a href="/">Lottery Results</a></li>
                    </ul>
                </div>

                <div className="col-sm-2 playes-info">
                    <h6>Legal</h6>
                    <ul>
                        <li><a href="/">Terms & condition</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Cookies Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="row">
                    <div className="col-sm-10 logo_info_bottom">
                        <a href="index.html" className="footer-logo">
                            <img src={logo} alt="logo"/>
                        </a>
                        <p>SUPPER WINNERS | All Rights Reserved Copyright 2021. Registered in Malta 172228</p>
                    </div>
                    <div className="col-sm-2 plus-spain">
                        <img src={eplus} alt="img"/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;