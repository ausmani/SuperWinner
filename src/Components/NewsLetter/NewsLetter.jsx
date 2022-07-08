// @flow
import * as React from 'react';
import tempImg from "../../assets/images/add-3.PNG";

export const NewsLetter = () => {
    return (
        <div className="add-info2">
            <div className="row">
                <div className="col-sm-12">
                    <div className="subscribe-newletter">
                        <img src={tempImg} alt="img"/>
                            <div className="subscribe-info">
                                <div className="letter-info">
                                    <input type="text" className="form-control"
                                           placeholder="Play over 70 draws from around the world!"/>
                                    <button type="button" className="subscribe-btn">Subscribe</button>
                                </div>
                                <label className="checkbox-inline"><input type="checkbox" value=""/>
                                    Feel free to send me information about upcoming jackpots, special offers and prizes.
                                </label>
                            </div>
                    </div>

                </div>

            </div>
        </div>
    );
};