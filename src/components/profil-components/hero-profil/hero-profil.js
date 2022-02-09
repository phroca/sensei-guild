import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import imgGaia from "../../../images/home-img/hero-img/GAIA.png"
import imgOrion from "../../../images/home-img/hero-img/ORION.png"
import imgPegasus from "../../../images/home-img/hero-img/PEGASUS.png"
import rewards from "../../../images/profil-img/rewards.png"
import profilEmpty from "../../../images/profil-img/profil-empty.png"
import { useEffect } from "react"
import { useERC20Balances, useMoralis, useNativeBalance, useMoralisWeb3ApiCall, useMoralisWeb3Api, useTokenPrice } from "react-moralis"
const HeroProfilContainer = styled.div`
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        justify-items: center;
        align-items: center;
        grid-gap: 50px;
        padding: 50px 0;
    `
const HeroProfilInfos = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    grid-gap: 150px;
    padding: 50px 0;
`
const HeroProfilPartLeft = styled.div`
    display: grid;
    grid-template-columns: 320px 500px;
    position: relative;
    align-items: center;
`
const ProfilImage = styled.img`
    border-radius: 50%;
    border: 5px solid #FD720E;
    z-index: 1;
`
const ProfilSocialLinks = styled.div`
    position: absolute;
    left: 50px;
    width: 450px;
    background: linear-gradient(45deg, #346DFF, #0E9CF4);
    border-radius: 60px;
    display: grid;
    grid-template-rows: repeat(3, 25px);
    grid-gap: 50px;
    justify-items: end;
    align-items: center;
    padding: 50px 100px;
    z-index: 0;
`
const SocialLink = styled.h2`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 24px;
`
const HeroProfilPartRight = styled.div`
    display: grid;
    grid-template-rows: 560px 20px;
    justify-items: center;
    align-items: center;
`

const ProfilTelegramLink = styled.a`
    font-family: "AirbnbCerealMedium";
    color: white;
    font-size: 18px;
    text-decoration: none;
`

const HeroProfilTotalRecompenseContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
`

const HeroProfilTotalRecompenseTitle = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 50px;

`
const HeroProfilTotalRecompenseValue = styled.div`
    display: grid;
    grid-template-columns: 150px 1fr 150px;
    justify-items: center;
    align-items: center;
    grid-gap: 50px;
`

const HeroProfilTotalRecompenseValueTitle = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 64px;
`


const HeroProfil = () => {
    const options = { chain: '0x61', address: '0xbfe92F7AF15441eBB41aC49902Bf1C073EA05285'};
    const {isAuthenticated, user, Moralis} = useMoralis();
    const { fetchERC20Balances, data } = useERC20Balances(options);
    const { getBalances, data: balance, nativeToken, error, isLoading } = useNativeBalance(options);
    //const Web3Api = useMoralisWeb3Api();
    
    //const { fetch, data: tokenBalances, error, isLoading } = useMoralisWeb3ApiCall(Web3Api.account.getTokenBalances, options);
    //const balances = Web3Api.account.getTokenBalances(options);
    //const test = Web3Api.token.getTokenPrice(options);
      
      useEffect(()=> {
        if(!data) {
            //fetchERC20Balances({ params: options });
        }
        if(!balance){
            ///fetchTokenPrice({ params: options });
        }
      });

    return (
        <HeroProfilContainer>
            <HeroProfilInfos>
                <HeroProfilPartLeft>
                    <ProfilImage src={isAuthenticated && user?.get("userProfile") ? user?.get("userProfile").url() : profilEmpty} width="300" height="300" />
                    <ProfilSocialLinks>
                        <SocialLink>Telegram : @{isAuthenticated && user?.get("telegramUser")}</SocialLink>
                        <SocialLink>Twitter : @{isAuthenticated && user?.get("twitterUser")}</SocialLink>
                        <SocialLink>@Discord - SOON</SocialLink>
                    </ProfilSocialLinks>
                </HeroProfilPartLeft>
                <HeroProfilPartRight>
                    <img src={ user?.get("guildName") === "gaia" ? imgGaia : user?.get("guildName") === "orion" ? imgOrion : imgPegasus} alt="img-guild profil" width="300" height= "300"/>
                    <ProfilTelegramLink href="/profil" target="_blank">Lien Telegram</ProfilTelegramLink>
                </HeroProfilPartRight>
            </HeroProfilInfos>
            <HeroProfilTotalRecompenseContainer>
                <HeroProfilTotalRecompenseTitle>
                    TOTAL GAIN $SENSEI & BNB 
                </HeroProfilTotalRecompenseTitle>
                <HeroProfilTotalRecompenseValue>
                    <img src={rewards} alt="rewards image" />
                    <HeroProfilTotalRecompenseValueTitle>
                    {isAuthenticated && user?.get("rewardsInSensei") ? user?.get("rewardsInSensei") : 0} $SENSEI
                    </HeroProfilTotalRecompenseValueTitle>
                    <img src={rewards} alt="rewards image" />
                </HeroProfilTotalRecompenseValue>
                <HeroProfilTotalRecompenseValue>
                    <img src={rewards} alt="rewards image" />
                    <HeroProfilTotalRecompenseValueTitle>
                    {isAuthenticated && user?.get("rewardsInBNB") ? user?.get("rewardsInBNB") : 0} $BNB
                    </HeroProfilTotalRecompenseValueTitle>
                    <img src={rewards} alt="rewards image" />
                </HeroProfilTotalRecompenseValue>
            </HeroProfilTotalRecompenseContainer>
        </HeroProfilContainer>
    ) 


}

export default HeroProfil