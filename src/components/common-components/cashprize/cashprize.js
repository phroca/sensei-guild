import * as React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "./cashprize.css"
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis"
import { useNativeBalance } from "react-moralis";

const options = { chain: '0x61', address: '0x97215e5bBc378bb483197F383597e1F576D49C6D'};

const CashPrizeContainer = styled.div`
    height: 750px;
    display: grid;
    grid-template-rows: repeat(2, 110px);
    padding: 150px 150px 100px;
    justify-items: center;
    align-content: center;
`

const CashPrizeNumber = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 50px;
    text-align: center;
`

const CashPrize = () => {
    const [cashprize, setCashprize] = React.useState(0);

    const { getBalance, data: balance, nativeToken, error, isLoading } = useNativeBalance(options);
    console.log(balance.formatted);
    
    return (
        <CashPrizeContainer className="bg-gradient-animated">
            <CashPrizeNumber>
                {balance.formatted}      
            </CashPrizeNumber>
            <Link to="/cashprize"><button className="sensei-btn big-btn">Cashprize</button></Link>
        </CashPrizeContainer>
    ) 

}

export default CashPrize