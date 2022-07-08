// @flow
import * as React from 'react';
import storeImg from "../../assets/images/online-store.png" ;
import giftCardImg from "../../assets/images/gift-card.png" ;
import headerLogo from "../../assets/images/h-logo.PNG"
const Sidebar = () => {
    return (
        <>
            <a className="logo" href="/"><img src={headerLogo} alt="logo"/></a>
            <aside>
                <ul>
                    <li><a href="/"><i className="fa fa-home"></i>Home</a></li>
                    <li><a href="/"><i className="fa fa-home"></i>All Lotteries</a></li>
                    <li><a href="/"><i className="fa fa-home"></i>Result</a></li>
                    <li><a href="/"><i className="fa fa-info-circle"></i>Information Center</a></li>
                    <li><a href="/"><i className="fa fa-bullhorn"></i>News</a></li>
                </ul>

                <div className="online-store">
                    <a href="/">
                        <img src={storeImg} alt="Online Store"/>
                    </a>
                </div>
                <div className="online-store">
                    <a href="/">
                        <img src={giftCardImg} alt="Gift Card"/>
                    </a>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;