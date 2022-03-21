import * as React from "react"
import { useEffect } from "react"
import styled from "styled-components"

import imgGaia from "../../../images/home-img/sections-img/GAIA.png"
import imgOrion from "../../../images/home-img/sections-img/ORION.png"
import imgPegasus from "../../../images/home-img/sections-img/PEGASUS.png"
import { useMoralis } from "react-moralis";
import { SenseiLink } from "../../common-components/containers/links/sensei-link"

const ChoixGuildeContainer = styled.div`
        background: black;
        display: grid;
        grid-template-rows: 275px auto;
        grid-gap: 50px;
        justify-items: center;
        padding: 50px 150px;
        @media (max-width: 640px) {
            padding: 50px;
        }
    `
    const ChoixGuildeTitle = styled.h1`
        font-family: "AirbnbCerealBlack";
        color: white;
        font-size: 50px;
        text-align: center;
        align-self: start;
        margin: 0;
        @media (max-width: 640px) {
            font-size: 30px;
        }
    `
    const ChoixGuildeListe = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 50px;
        align-items: center;
        justify-items: center;
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `
    const GuildeSection = styled.div`
        display: grid;
        grid-template-rows: 40% 150px 80px;
        grid-gap: 30px;
        align-items: center;
        justify-items: center;
        .subtext {
            color: white;
            text-align: center;
        }
        @media (max-width: 640px) {
            img{
                width: 140px;
            }
        }
    `
    const GuildeChoiceTitle = styled.h2`
        font-family: "AirbnbCerealBlack";
        color: white;
        grid-gap: 50px;
    `

const SectionChoixGuilde = () => {
    return (
        <ChoixGuildeContainer>
            <ChoixGuildeTitle>
                Vivez l'aventure et remportez des <br />
                CASHPRIZE exceptionnels en <br />
                BNB ou en $SENSEI   
            </ChoixGuildeTitle>
            <ChoixGuildeListe>
                <GuildeSection>
                    <img className="img-gaia" src={imgGaia} alt="gaia" width="250"/>
                    <div className="subtext">
                        En tant que divinité, Gaïa est, d'une certaine manière, 
                        la gardienne du pouvoir divin : 
                        c'est elle qui provoque la rébellion.
                        Elle est aussi la première divinité qui pouvait prédire l'avenir.
                    </div>
                    <GuildeChoiceTitle>GUILDE GAIA</GuildeChoiceTitle>
                </GuildeSection>
                <GuildeSection>
                <img className="img-pegasus" src={imgPegasus} alt="pegasus" width="250"/>
                    <div className="subtext">
                        Le mythe de Pégase est issu des dieux lyciens et assyriens. 
                        C'est un Symbole de sagesse avec une profonde symbolique en 
                        relation avec l'énergie spirituelle qui permet d'accéder au 
                        domaine des dieux, le mont Olympe, lui est attachée.
                    </div>
                    <GuildeChoiceTitle>GUILDE PEGASUS</GuildeChoiceTitle>
                </GuildeSection>
                <GuildeSection>
                    <img className="img-orion" src={imgOrion} alt="orion" width="250"/>
                    <div className="subtext">
                        La constellation d'Orion est une des 
                        plus belles constellations du ciel.
                        C'est une supergéante rouge, une étoile 
                        600 fois plus grosse que le Soleil et 
                        qui règne dans le ciel de l'univers. 
                    </div>
                    <GuildeChoiceTitle>GUILDE ORION</GuildeChoiceTitle>
                </GuildeSection>
            </ChoixGuildeListe>
        </ChoixGuildeContainer>
    ) 
}

export default SectionChoixGuilde