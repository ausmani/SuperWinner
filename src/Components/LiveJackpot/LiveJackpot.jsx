// @flow
import * as React from 'react';



export const LiveJackpot = ({companies}) => {
    const colors =['#230F65','#04a713','#2836CD','#005D51','#F50000']
    return (
        <div className="jackpots-offers">
            <h3><i className="fa fa-money"></i>Highest LIVE jackpots | <span>Explore some of the very best gamesin the world of onlines slots $ casino</span>
            </h3>
            {
                companies.map((row, ind) => {

                    return (
                        ind > 4  ? "":<div className="box-jackpot" style={{background: colors[ind]}} key={ind}>
                            <h3>{row.company_name}</h3>
                            <a href="/"><img src={row.url} alt="icon"/></a>
                            <span className="supper-prize">Super Prize</span>
                            <strong className="prize-strong">€ {row.live_winning_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>
                            <p><i className="fa fa-clock-o"></i> <span className="time-left">1 Day 15 Hours 00 Mins</span></p>
                            <button type="button" className="play">Play</button>
                        </div>
                    )
                })
            }

        </div>
    );
};