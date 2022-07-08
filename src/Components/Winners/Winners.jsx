// @flow 
import * as React from 'react';
import icon1 from "../../assets/images/icon-1.PNG";
import icon2 from "../../assets/images/icon-2.png";
import icon3 from "../../assets/images/icon-3.png";
import icon4 from "../../assets/images/icon-4.png";
const Winners = () => {
 return (
     <div className="we-won-jackpot">
      <h2>Why play with super winners?</h2>
      <div className="row super_winners">

       <div className="col-sm-3">
        <div className="winner_box">
         <img src={icon1} alt="icon"/>
         <h3>Guaranteed</h3>
         <p>Guaranteed with payouts to every customer, everytime!</p>
        </div>
       </div>


       <div className="col-sm-3">
        <div className="winner_box">
         <img src={icon2} alt="icon"/>
         <h3>Safe & Secure</h3>
         <p>Guaranteed with payouts to every customer, everytime!</p>
        </div>
       </div>

       <div className="col-sm-3">
        <div className="winner_box">
         <img src={icon3} alt="icon"/>
         <h3>Prizes</h3>
         <p>Guaranteed with payouts to every customer, everytime!</p>
        </div>
       </div>

       <div className="col-sm-3">
        <div className="winner_box">
         <img src={icon4} alt="icon"/>
         <h3>Premium Services</h3>
         <p>Guaranteed with payouts to every customer, everytime!</p>
        </div>
       </div>
      </div>
     </div>
 );
};
export default Winners;