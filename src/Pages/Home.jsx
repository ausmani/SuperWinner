// @flow
import React,{useState,useEffect} from 'react';
import Sidebar from "../Components/Sidebar/Sidebar";
import MainBar from "../Components/MainBar/MainBar";
import Companies from "../Components/Companies/Companies";
import Jackpots from "../Components/Jackpots/Jackpots";
import {LiveJackpot} from "../Components/LiveJackpot/LiveJackpot";
import {NewsLetter} from "../Components/NewsLetter/NewsLetter";
import {HaveWon} from "../Components/HaveWon/HaveWon";
import Winners from "../Components/Winners/Winners";
import InformationCenter from "../Components/InformationCenter/InformationCenter";
import Footer from "../Components/Footer/Footer";
import axios from "axios";


export const Home = () => {
    const [companies,setCompanies] = useState([]);
    const [fetching,setFetching] = useState(true);
    useEffect(()=>{
        axios.get(process.env.REACT_APP_SERVER_URL+'widget').then((response)=>{
            setCompanies(response.data.data)
            setFetching(false)
        })
    },[fetching])
    return (
        <div className="row">
            <div className="col-sm-2 left-side">
                <Sidebar/>
            </div>
            <div className="col-sm-10 banner-div">
                <MainBar/>
                <Companies companies={companies}/>
                <Jackpots/>
                <LiveJackpot companies={companies}/>
                <NewsLetter/>
                <HaveWon/>
                <Winners/>
                <InformationCenter/>
                <Footer/>
            </div>
        </div>

    );
};

export default Home;