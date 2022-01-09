import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import imgGaia from "../../../images/home-img/hero-img/GAIA.png"
import imgOrion from "../../../images/home-img/hero-img/ORION.png"
import imgPegasus from "../../../images/home-img/hero-img/PEGASUS.png"
import "./hero-guilde.css"

const HeroGuildeContainer = styled.div`
        background: black;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 150px 150px 100px;
        justify-items: center;
        align-items: center; 
    `
const HeroGuildePartLeft = styled.div`
    display: grid;
    grid-template-rows: 320px 65px 90px;
    justify-items: left;
    align-items: center; 

`
const HeroTitle = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 50px;
    text-align: left;
`
const HeroSubtitle = styled.p`
    color: white;
    text-align: left;
`
const HeroGuildePartRight = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    .hero--img-gaia{
        grid-column-start: 2;
        grid-row-start: 1;
    }
    .hero--img-orion{
        grid-column-start: 1;
        grid-row-start: 2;
    }
    .hero--img-pegasus{
        grid-column-start: 3;
        grid-row-start: 2;
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
                <Link to="/inscription"><button className="sensei-btn">Inscription</button></Link>
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