import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import imgGaia from "../../../images/home-img/hero-img/GAIA.png"
import imgOrion from "../../../images/home-img/hero-img/ORION.png"
import imgPegasus from "../../../images/home-img/hero-img/PEGASUS.png"
import "./hero-guilde.css"
import { SenseiLink } from "../../common-components/containers/links/sensei-link"

const HeroGuildeContainer = styled.div`
        background: black;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 150px 150px 100px;
        justify-items: center;
        align-items: center; 
        @media (max-width: 640px) {
            padding: 100px 50px 100px;
            grid-template-columns: 1fr;
            grid-template-rows: 200px auto;
        }
    `
const HeroGuildePartLeft = styled.div`
    display: grid;
    grid-template-rows: 320px 65px 90px;
    justify-items: left;
    align-items: center; 

    @media (max-width: 640px) {
        grid-template-rows: 150px 100px 90px;
    }

`
const HeroTitle = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 50px;
    text-align: left;
    @media (max-width: 640px) {
            font-size: 30px;
    }

`
const HeroSubtitle = styled.p`
    color: white;
    text-align: left;
`
const HeroGuildePartRight = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    @media (max-width: 640px) {
        grid-row-start: 1;
    }
    .hero--img-gaia{
        grid-column-start: 2;
        grid-row-start: 1;
        @media (max-width: 640px) {
            height: 70px;
        }
    }
    .hero--img-orion{
        grid-column-start: 1;
        grid-row-start: 2;
        @media (max-width: 640px) {
            height: 70px;
        }
    }
    .hero--img-pegasus{
        grid-column-start: 3;
        grid-row-start: 2;
        @media (max-width: 640px) {
            height: 70px;
        }
    }
`
const HeroGuilde = () => {

    
    return (
        <HeroGuildeContainer>
            <HeroGuildePartLeft>
                <HeroTitle>
                    Inscrivez-vous pour<br />
                    Jouez gratuitement,<br />
                    dès maintenant !
                </HeroTitle>
                <HeroSubtitle>
                    Amusez-vous, restez soudés et vivez l’aventure à plusieurs <br />
                    pour faire gagner votre guilde et remportez des Cashprize<br /> 
                    exceptionnels en $SENSEI ou BNB.
                </HeroSubtitle>
                <SenseiLink to="/inscription" className="sensei-btn">Inscription</SenseiLink>
            </HeroGuildePartLeft>
            <HeroGuildePartRight>
                <img className="hero--img-gaia" src={imgGaia} alt="gaia" />
                <img className="hero--img-orion" src={imgOrion} alt="orion" />
                <img className="hero--img-pegasus" src={imgPegasus} alt="pegasus" />
            </HeroGuildePartRight>
        </HeroGuildeContainer>
    ) 


}

export default HeroGuilde