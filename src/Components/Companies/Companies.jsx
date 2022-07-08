// @flow
import React from 'react';

const Companies = ({companies}) => {

    return (

        <div className="jackpots">
            <h3><i className="fa fa-clock-o"></i>Ending Soon | <span>Don't miss out these huge jackpots!</span></h3>
            <ul className="jackpot-icons">
                {
                    companies.map((row,ind)=>{

                        return <li key={row.id}><img src={row.url} alt="Jackpot"/>
                            <strong>€ {row.winning_price}m</strong></li>
                    })
                }


            </ul>
        </div>
    );
};

export default Companies;