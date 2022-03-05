import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import imgGaia from "../../../images/home-img/hero-img/GAIA.png"
import imgOrion from "../../../images/home-img/hero-img/ORION.png"
import imgPegasus from "../../../images/home-img/hero-img/PEGASUS.png"
import imgNone from "../../../images/home-img/hero-img/NONE.png"

import rewards from "../../../images/profil-img/rewards.png"
import profilEmpty from "../../../images/profil-img/profil-empty.png"
import { useEffect, useRef, useState } from "react"
import { useERC20Balances, useMoralis, useNativeBalance, useMoralisWeb3ApiCall, useMoralisWeb3Api, useTokenPrice } from "react-moralis"
import toast, { Toaster } from 'react-hot-toast';

const HeroProfilContainer = styled.div`
        display: grid;
        grid-template-rows: 450px 1fr;
        justify-items: center;
        align-items: center;
        grid-gap: 50px;
        @media (max-width: 640px) {
            grid-template-rows: repeat(2, auto);
        }
`

const HeroProfilInfos = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    grid-gap: 150px;
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-template-rows: 200px auto;
        grid-gap: 50px;
    }
`
const HeroProfilPartLeft = styled.div`
    display: grid;
    grid-template-columns: 320px 500px;
    position: relative;
    align-items: center;
    @media (max-width: 640px) {
        grid-template-columns: 50px 200px;
    }
`
const ProfilImage = styled.img`
    border-radius: 50%;
    border: 5px solid #FD720E;
    z-index: 1;
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 640px) {
        width: 50px;
        height: 50px;
        }
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
    @media (max-width: 640px) {
        width: 120px;
        left: 30px;
        padding: 15px 40px;
        grid-gap: 10px;
        border-radius: 40px;
    }
    
`
const SocialLink = styled.h2`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 24px;
    @media (max-width: 640px) {
        font-size: 12px;
    }
`
const HeroProfilPartRight = styled.div`
    display: grid;
    grid-template-rows: 320px 70px 20px;
    justify-items: center;
    align-items: center;
    @media (max-width: 640px) {
        grid-template-rows: 100px 70px 20px;
        img{
            width: 80px;
            height: 80px;
        }
        
    }

`
const HeroProfilGuildName = styled.h2`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 30px;
    text-transform: uppercase;
    @media (max-width: 640px) {
            font-size: 14px;
    }
`

const ProfilTelegramLink = styled.a`
    font-family: "AirbnbCerealMedium";
    color: white;
    font-size: 18px;
    text-decoration: none;
`

const HeroProfilTotalRecompenseContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    width: 100%;
    @media (max-width: 640px) {
        grid-template-rows: repeat(3, auto);
        
    }
`

const HeroProfilTotalRecompenseTitle = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 50px;
    justify-self: start;
    @media (max-width: 640px) {
        font-size: 24px;
        justify-self: center;
        text-align: center;
    }
`
const HeroProfilTotalRecompenseValue = styled.div`
    display: grid;
    grid-template-columns: 150px 1fr 150px;
    justify-items: center;
    align-items: center;
    grid-gap: 50px;
    @media (max-width: 640px) {
        grid-template-columns: auto auto auto;
        grid-gap: 20px;
        img{
            width: 50px;
        }
    }
`

const HeroProfilTotalRecompenseValueTitle = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 64px;
    @media (max-width: 640px) {
            font-size: 16px;
            text-align: center;
    }
`
const InputProfil = styled.input`
display: none;`

const HeroProfil = () => {
    const options = { chain: process.env.GATSBY_MORALIS_CASHPRIZE_NETWORK_CHAIN, address: '0xbfe92F7AF15441eBB41aC49902Bf1C073EA05285'};
    const {isAuthenticated, user, Moralis} = useMoralis();
    const { fetchERC20Balances, data } = useERC20Balances(options);
    const { getBalances, data: balance, nativeToken, error, isLoading } = useNativeBalance(options);
    const wrapperRef = useRef(null);
    const [currentProfile, setCurrentProfile] = useState();
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
        if(isAuthenticated){
            setCurrentProfile(user?.get("userProfile") ? user?.get("userProfile").url() : profilEmpty);
        }
    }, [user]);

    const handleUploadImage = (e) => {
        const target = e.target;
        const files = target.files;
        if(files.length === 1){
            const fileToSave = new Moralis.File(files[0].name, files[0]);
            user.set("userProfile", fileToSave);
            const savingProfile = user.save().then((user)=>{
                setCurrentProfile(user?.get("userProfile").url());
            })
            toast.promise(savingProfile, {
                loading: 'Mise à jour de la photo de profil...',
                success: 'La photo de profil a été mis a jour !',
                error: 'Erreur à l\'enregistrement.'
            },
            {
                style: {
                    minWidth: '250px',
                    background: '#333',
                    color: '#fff',
                },
            });
        }
    }

    return (
        <HeroProfilContainer>
        <Toaster />
            <HeroProfilInfos>
                <HeroProfilPartLeft>
                    <ProfilImage src={currentProfile} width="300" height="300" onClick={()=> {wrapperRef.current.click();}}/>
                    <ProfilSocialLinks>
                        <SocialLink>Telegram : @{isAuthenticated && user?.get("telegramUser")}</SocialLink>
                        <SocialLink>Twitter : @{isAuthenticated && user?.get("twitterUser")}</SocialLink>
                        <SocialLink>@Discord - SOON</SocialLink>
                    </ProfilSocialLinks>
                    <InputProfil ref={wrapperRef} type="file" id='profilupload' onChange={(e) => handleUploadImage(e)} accept="image/jpeg, image/png"/>
                </HeroProfilPartLeft>
                <HeroProfilPartRight>
                    <img src={ user?.get("guildName") === "gaia" ? imgGaia : user?.get("guildName") === "orion" ? imgOrion : user?.get("guildName") === "pegasus" ? imgPegasus : imgNone} alt="img-guild profil" width="300" height= "300"/>
                    <HeroProfilGuildName>{user?.get("guildName")}</HeroProfilGuildName>
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