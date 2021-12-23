import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import imgGaia from "../../../images/home-img/sections-img/GAIA.png"
import imgOrion from "../../../images/home-img/sections-img/ORION.png"
import imgPegasus from "../../../images/home-img/sections-img/PEGASUS.png"


const SectionChoixGuilde = () => {

    const ChoixGuildeContainer = styled.div`
        background: black;
        display: grid;
        grid-template-rows: 275px auto;
        grid-gap: 50px;
        justify-items: center;
        padding: 50px 150px;
    `
    const ChoixGuildeTitle = styled.h1`
        font-family: "AirbnbCerealBlack";
        color: white;
        font-size: 50px;
        text-align: center;
        align-self: start;
        margin: 0;
    `
    const ChoixGuildeListe = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 50px;
        align-items: center;
        justify-items: center;
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
    `


    return (
        <ChoixGuildeContainer>
            <ChoixGuildeTitle>
                Vivez l'aventure et remportez des <br />
                CASHPRIZE exceptionnels en <br />
                BNB ou en $SENSEI   
            </ChoixGuildeTitle>
            <ChoixGuildeListe>
                <GuildeSection>
                    <img className="img-gaia" src={imgGaia} alt="gaia" />
                    <div className="subtext">
                        En tant que divinité, Gaïa est, d'une certaine manière, 
                        la gardienne du pouvoir divin : 
                        c'est elle qui provoque la rébellion
                        Elle est aussi la première divinité qui pouvait prédire l'avenir.
                    </div>
                    <Link><button className="sensei-btn big-btn">enter GAIA</button></Link>
                </GuildeSection>
                <GuildeSection>
                    <img className="img-orion" src={imgOrion} alt="orion" />
                    <div className="subtext">
                        Le mythe de Pégase est issu des dieux lyciens et assyriens. 
                        C'est un Symbole de sagesse avec une profonde symbolique en 
                        relation avec l'énergie spirituelle qui permet d'accéder au 
                        domaine des dieux, le mont Olympe, lui est attachée.
                    </div>
                    <Link><button className="sensei-btn big-btn">enter ORION</button></Link>
                </GuildeSection>
                <GuildeSection>
                     <img className="img-pegasus" src={imgPegasus} alt="pegasus" />
                    <div className="subtext">
                        La constellation d'Orion est une des 
                        plus belles constellations du ciel.
                        C'est une supergéante rouge, une étoile 
                        600 fois plus grosse que le Soleil et 
                        qui règne dans le ciel de l'univers. 
                    </div>
                    <Link><button className="sensei-btn big-btn">enter PEGASUS</button></Link>
                </GuildeSection>
            </ChoixGuildeListe>
        </ChoixGuildeContainer>
    ) 
}

export default SectionChoixGuilde