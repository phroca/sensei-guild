import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import imgGaia from "../../../images/img-gaia.svg"
import imgOrion from "../../../images/img-orion.svg"
import imgPegasus from "../../../images/img-pegasus.svg"

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
    .img-gaia{
        grid-column-start: 2;
        grid-row-start: 1;
    }
    .img-orion{
        grid-column-start: 1;
        grid-row-start: 2;
    }
    .img-pegasus{
        grid-column-start: 3;
        grid-row-start: 2;
    }
`
const HeroGuilde = () => {

    
    return (
        <HeroGuildeContainer>
            <HeroGuildePartLeft>
                <HeroTitle>
                    Découvrez la guilde <br /> 
                    qu'il vous faut ! <br />
                    Jouez gratuitement,<br />
                    dès maintenant !
                </HeroTitle>
                <HeroSubtitle>
                    Amusez-vous, restez soudés et vivez l’aventure à plusieurs <br />
                    pour faire gagner votre guilde et remportez des Cashprize exceptionnels en $SENSEI <br />
                    ou BNB.
                </HeroSubtitle>
                <Link to="/"><button className="sensei-btn">Cashprize</button></Link>
            </HeroGuildePartLeft>
            <HeroGuildePartRight>
                <img className="img-gaia" src={imgGaia} alt="gaia" />
                <img className="img-orion" src={imgOrion} alt="orion" />
                <img className="img-pegasus" src={imgPegasus} alt="pegasus" />
            </HeroGuildePartRight>
        </HeroGuildeContainer>
    ) 


}

export default HeroGuilde