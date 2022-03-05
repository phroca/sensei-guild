import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "./cashprize.css"
import { useERC20Balances } from "react-moralis";
import { useState, useEffect } from "react";

const CashPrizeContainer = styled.div`
    height: 750px;
    display: grid;
    grid-template-rows: repeat(2, 110px);
    padding: 150px 150px 100px;
    justify-items: center;
    align-content: center;
    @media (max-width: 640px) {
            height: 250px;
            padding: 100px 50px 100px;

    }
`

const CashPrizeNumber = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 50px;
    text-align: center;
    @media (max-width: 640px) {
            font-size: 30px;
    }
`

const CashPrize = () => {
    const options = { chain: process.env.GATSBY_MORALIS_CASHPRIZE_NETWORK_CHAIN, address: process.env.GATSBY_MORALIS_CASHPRIZE_ADDRESS};
    const { data, fetchERC20Balances } = useERC20Balances(options); 
    const [cashprize, setCashprize] = useState(0);

    useEffect(() => {
        if(data !== null){
            setCashprize(data?.filter(data => data.token_address === process.env.GATSBY_MORALIS_BNB_ADDRESS.toLowerCase())[0]?.balance / (10 ** +data?.filter(data => data.token_address === process.env.GATSBY_MORALIS_BNB_ADDRESS.toLowerCase())[0]?.decimals));
        } else {
            fetchERC20Balances(options);
        }
    });

    return (
        <CashPrizeContainer className="bg-gradient-animated">
            <CashPrizeNumber>
                {cashprize} $SENSEI
            </CashPrizeNumber>
            <Link to="/cashprize"><button className="sensei-btn big-btn">Cashprize</button></Link>
        </CashPrizeContainer>
    ) 

}

export default CashPrize