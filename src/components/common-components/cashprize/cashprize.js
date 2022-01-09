import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "./cashprize.css"
import { useERC20Balances } from "react-moralis";

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
    const { data } = useERC20Balances(); 
    
    return (
        <CashPrizeContainer className="bg-gradient-animated">
            <CashPrizeNumber>
                {!data && 0}
                { data && data?.filter(data => data.token_address === "0x5cE794a65c0cC043064AC2f0176bF1f20A13B127".toLowerCase())[0]?.balance / (10 ** +data?.filter(data => data.token_address === "0x5cE794a65c0cC043064AC2f0176bF1f20A13B127".toLowerCase())[0]?.decimals)} $SENSEI
            </CashPrizeNumber>
            <Link to="/cashprize"><button className="sensei-btn big-btn">Cashprize</button></Link>
        </CashPrizeContainer>
    ) 

}

export default CashPrize