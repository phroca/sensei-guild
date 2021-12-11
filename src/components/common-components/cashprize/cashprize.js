import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "./cashprize.css"

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
    return (
        <CashPrizeContainer className="bg-gradient-animated">
            <CashPrizeNumber>
                295 251 463 $SENSEI        
            </CashPrizeNumber>
            <Link to="/"><button className="sensei-btn big-btn">Cashprize</button></Link>
        </CashPrizeContainer>
    ) 

}

export default CashPrize