import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import imgLogo from "../../images/big-logo-sensei.png"


import footerdata from "../../../footerdata.json"


const FooterContainer =styled.div`
    background: #211E25;
    height: 588px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 30px;
    align-items: center;
    justify-items: center;
    padding: 100px 300px;
    @media (max-width: 640px) {
        padding: 100px;
        height: 100%;
        grid-template-rows: repeat(3, auto);
    }
`
const FooterTop = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
    align-items: center;
    justify-items: center;
    @media (max-width: 640px) {
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: 1fr;
    }
`


const FooterLogo = styled.div`

`
const FooterColumn = styled.div`
    display: grid;
    grid-template-rows: 60px 140px;
    grid-gap: 30px;
    align-items: center;
    justify-items: center;
`

const FooterColumnTitle = styled.h2`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 26px;
    text-align: left;
    text-transform: uppercase;
`
const FooterColumnListLinkPages = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    align-items: center;
    justify-items: center;
    grid-gap: 10px;
    a{
        font-family: "AirbnbCerealMedium";
        font-size: 16px;
        color: white;
        text-decoration: none;
        text-align: left;
    }
    
`
const FooterColumnListLinkCommunity = styled.div`
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    align-items: center;
    justify-items: center;
    grid-gap: 10px;
    a{
        font-family: "AirbnbCerealMedium";
        font-size: 16px;
        color: white;
        text-decoration: none;
        text-align: left;
    }
`
const FooterColumnListLinkResources = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    align-items: center;
    justify-items: center;
    grid-gap: 10px;
    a{
        font-family: "AirbnbCerealMedium";
        font-size: 16px;
        color: white;
        text-decoration: none;
        text-align: left;
    }
`
const FooterSeparator = styled.div`
    height: 1px;
    width: 100%;
    background-color: #FFFFFF;
`
const FooterBottom = styled.p`
    font-size: 12px;
    color: white;
    text-align: center;
`

const Footer = () => {



    return (
        <FooterContainer>
            <FooterTop>
                <FooterLogo>
                    <Link to="/"><img src={imgLogo} alt="logo Sensei" height="182" width="182" /></Link>  
                </FooterLogo>
                <FooterColumn>
                    <FooterColumnTitle>
                        Sensei
                    </FooterColumnTitle>
                    <FooterColumnListLinkPages>
                    {footerdata.footerPages.map(page=> (
                        <a key={page.id} href={page.link} target={page.isExternalLink ? "_blank" : "_self"}>{page.label}</a>
                    ))}
                    </FooterColumnListLinkPages>
                </FooterColumn>
                <FooterColumn>
                    <FooterColumnTitle>
                    Community
                    </FooterColumnTitle>
                    <FooterColumnListLinkCommunity>
                    {footerdata.footerCommunity.map(com=> (
                        <a key={com.id} href={com.link} target={com.isExternalLink ? "_blank" : "_self"}>{com.label}</a>
                    ))}
                    </FooterColumnListLinkCommunity>
                </FooterColumn>
                <FooterColumn>
                    <FooterColumnTitle>
                    Ressource
                    </FooterColumnTitle>
                    <FooterColumnListLinkResources>
                    {footerdata.footerResource.map(res=> (
                        <a key={res.id} href={res.link} target={res.isExternalLink ? "_blank" : "_self"}>{res.label}</a>
                    ))}
                    </FooterColumnListLinkResources>
                </FooterColumn>
            </FooterTop>
            <FooterSeparator />
            <FooterBottom>
            © Copyright 2020 – 2022. All Rights Reserved.
            </FooterBottom>
        </FooterContainer>
    ) 
}

export default Footer