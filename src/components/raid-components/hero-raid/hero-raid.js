import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import imgGaia from "../../../images/img-gaia.svg"
import imgOrion from "../../../images/img-orion.svg"
import imgPegasus from "../../../images/img-pegasus.svg"

const HeroRaidContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center; 
    grid-gap: 150px;
    padding: 50px 0;
`

const HeroRaidPartLeft = styled.div`
    display: grid;
    grid-template-rows: 320px 1fr;
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
const HeroRaidPartRight = styled.div`
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

const HeroRaid = () => {

    
    return (
        <HeroRaidContainer>
            <HeroRaidPartLeft>
                <HeroTitle>
                    RAID DU JOUR : 
                </HeroTitle>
                <HeroSubtitle>
                    MISSION DU JOUR : 🛰<br />
                    CIBLE : CoinGecko 🎯<br />
                    https://www.coingecko.com/en/coins/sensei<br />
                    Afin de donner davantage de visibilité à $SENSEI sur Coingecko :<br />
                    1️⃣ Crée un compte sur CoinGecko puis clique sur l'étoile ⭐️ pour ajouter SENSEI à tes favoris, ce qui booste notre classement. 🤝<br />
                    2️⃣  Vote Good pour soutenir le score de SENSEI. 🤝<br />
                    Ne sous estime pas la force de ton action, c’est important pour le projet et ça peut nous faire gagner beaucoup de visibilité.<br />
                    #WEARESENSEI ⛩
                </HeroSubtitle>
            </HeroRaidPartLeft>
            <HeroRaidPartRight>
                <img className="img-gaia" src={imgGaia} alt="gaia" />
                <img className="img-orion" src={imgOrion} alt="orion" />
                <img className="img-pegasus" src={imgPegasus} alt="pegasus" />
            </HeroRaidPartRight>
        </HeroRaidContainer>
    ) 


}

export default HeroRaid