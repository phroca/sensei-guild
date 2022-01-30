import * as React from "react"
import styled from "styled-components"

const HeroCashprizeContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px;
    max-height: 550px;
    padding: 50px 0 100px;
`
const CashprizeTitle = styled.div`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 100px;
    text-align: center;
`
const CashprizeContent = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
`

const CashprizeInSensei = styled.div`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 144px;
    text-align: center;
`
const CashprizeInBNB = styled.div`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 144px;
    text-align: center;
`

const HeroCashprize = () => {

    return(
        <HeroCashprizeContainer>
            <CashprizeTitle>CASHPRIZE EN COURS</CashprizeTitle>
            <CashprizeContent>
                <CashprizeInSensei>356 566 759 SENSEI</CashprizeInSensei>
                <CashprizeInBNB>32 BNB</CashprizeInBNB>
            </CashprizeContent>
        </HeroCashprizeContainer>
    )
}

export default HeroCashprize