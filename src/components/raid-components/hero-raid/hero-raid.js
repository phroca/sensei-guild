import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import imgRaid from "../../../images/raid-img/tothemooon.png"

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
    grid-template-columns: 1fr;
`

const HeroRaid = ({propRaid}) => {

    const isRaidOfTheDay = propRaid && propRaid[0]?.get("isRaidOfTheDay");
    const cible = propRaid && isRaidOfTheDay && propRaid[0]?.get("target");
    const link = propRaid && isRaidOfTheDay && propRaid[0]?.get("linkTarget");
    const ruleParagraph = propRaid && isRaidOfTheDay && propRaid[0]?.get("ruleParagraph");
    return (
        <HeroRaidContainer>
            <HeroRaidPartLeft>
                <HeroTitle>
                    RAID DU JOUR : 
                </HeroTitle>
                <HeroSubtitle>
                    MISSION DU JOUR :<br />
                    CIBLE : {cible}<br />
                    {link}<br />
                    <p dangerouslySetInnerHTML={{__html: ruleParagraph}}></p>
                </HeroSubtitle>
            </HeroRaidPartLeft>
            <HeroRaidPartRight>
                <img className="img-raid" src={imgRaid} alt="raid" />
            </HeroRaidPartRight>
        </HeroRaidContainer>
    ) 


}

export default HeroRaid