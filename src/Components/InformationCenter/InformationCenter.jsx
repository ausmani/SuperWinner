// @flow
import * as React from 'react';
import icImg1 from '../../assets/images/icImg1.PNG';
import icImg2 from '../../assets/images/icImg2.png';

const InformationCenter = () => {
    return (
        <div className="latest-job">
            <h3><i className="fa fa-money"></i>Information | <span>Latest blog posts</span></h3>
            <ul>
                <li>
                    <div className="latestjob_box">
                        <img src={icImg1} alt="icon"/>
                        <div className="blog-info">
                            <h3>Opening a Super Winner Account</h3>
                            <p>Opening a Super Winner Account is a simple</p>
                            <button type="button" className="read-more">Read More</button>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="latestjob_box">
                        <img src={icImg2} alt="icon"/>
                        <div className="blog-info">
                            <h3>Opening a Super Winner Account</h3>
                            <p>Opening a Super Winner Account is a simple</p>
                            <button type="button" className="read-more">Read More</button>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="latestjob_box">
                        <img src={icImg1} alt="icon"/>
                        <div className="blog-info">
                            <h3>Opening a Super Winner Account</h3>
                            <p>Opening a Super Winner Account is a simple</p>
                            <button type="button" className="read-more">Read More</button>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="latestjob_box">
                        <img src={icImg2} alt="icon"/>
                        <div className="blog-info">
                            <h3>Opening a Super Winner Account</h3>
                            <p>Opening a Super Winner Account is a simple</p>
                            <button type="button" className="read-more">Read More</button>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="latestjob_box">
                        <img src={icImg1} alt="icon"/>
                        <div className="blog-info">
                            <h3>Opening a Super Winner Account</h3>
                            <p>Opening a Super Winner Account is a simple</p>
                            <button type="button" className="read-more">Read More</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default InformationCenter;