import * as React from "react"
import styled from "styled-components"
import { useERC20Balances, useNativeBalance } from "react-moralis"
import { useEffect, useState } from "react"

const HeroCashprizeContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px;
    max-height: 550px;
    padding: 50px 0 100px;
    @media (max-width: 640px) {
        grid-template-rows: auto;
        max-height: 250px;
    }
`
const CashprizeTitle = styled.div`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 80px;
    text-align: center;
    @media (max-width: 640px) {
        font-size: 34px;
    }
`
const CashprizeContent = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
`

const CashprizeInSensei = styled.div`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 100px;
    text-align: center;
    @media (max-width: 640px) {
            font-size: 36px;
    }
`
const CashprizeInBNB = styled.div`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 100px;
    text-align: center;
    @media (max-width: 640px) {
            font-size: 36px;
    }
`

const HeroCashprize = () => {
    const options = { chain: process.env.GATSBY_MORALIS_CASHPRIZE_NETWORK_CHAIN, address: process.env.GATSBY_MORALIS_CASHPRIZE_ADDRESS};
    const { fetchERC20Balances, data } = useERC20Balances(options);
    const { getBalances, data: balance, nativeToken, error, isLoading } = useNativeBalance(options);
    const [currentCashprizeSensei, setCurrentCashprizeSensei] = useState(0);
    const [currentCashprizeBNB, setCurrentCashprizeBNB] = useState(0);
    useEffect(()=> {
        if(data !== null){
            setCurrentCashprizeSensei(data?.filter(data => data.token_address === process.env.GATSBY_MORALIS_BNB_ADDRESS.toLowerCase())[0]?.balance / (10 ** +data?.filter(data => data.token_address === process.env.GATSBY_MORALIS_BNB_ADDRESS.toLowerCase())[0]?.decimals));
        } else {
            fetchERC20Balances(options);
        }

        if(balance && balance.balance){
            setCurrentCashprizeBNB(balance?.formatted?.split(" ")[0])
        } else {
            getBalances(options);
        }
    }, [data, balance])
    return(
        <HeroCashprizeContainer>
            <CashprizeTitle>CASHPRIZE EN COURS</CashprizeTitle>
            <CashprizeContent>
                <CashprizeInSensei>
                    {currentCashprizeSensei} $SENSEI
                </CashprizeInSensei>
                <CashprizeInBNB>
                    {currentCashprizeBNB} $BNB
                </CashprizeInBNB>
            </CashprizeContent>
        </HeroCashprizeContainer>
    )
}

export default HeroCashprize