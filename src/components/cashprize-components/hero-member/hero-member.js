import * as React from "react"
import styled from "styled-components"

import imgGaia from "../../../images/home-img/hero-img/GAIA.png"
import imgOrion from "../../../images/home-img/hero-img/ORION.png"
import imgPegasus from "../../../images/home-img/hero-img/PEGASUS.png"
import { useMoralisQuery } from "react-moralis";

const MembresGuildes = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 20px;
`;

const SectionMembre = styled.div`
    display: grid;
    grid-template-rows: 260px 50px;
    align-items: center;
    justify-content: center;
    justify-items: center;
    grid-gap: 5px;
`

const TextMembre = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 24px;
    text-transform: uppercase;
`
const HeroMember = () => {
    const { data, error, isLoading } = useMoralisQuery("Guild");
    return(
        <MembresGuildes>
                <SectionMembre>
                    <img className="img-gaia" src={imgGaia} width="260" height="260" alt="gaia" />
                    <TextMembre>{data && data.filter(item => item.get("name") === "gaia")[0]?.get("memberSize")} Membres</TextMembre>
                </SectionMembre>
                <SectionMembre>
                    <img className="img-orion" src={imgOrion} width="260" height="260" alt="orion" />
                    <TextMembre>{data && data.filter(item => item.get("name") === "orion")[0]?.get("memberSize")} Membres</TextMembre>
                </SectionMembre>
                <SectionMembre>
                    <img className="img-pegasus" src={imgPegasus} width="260" height="260" alt="pegasus" />
                    <TextMembre>{data && data.filter(item => item.get("name") === "pegasus")[0]?.get("memberSize")} Membres</TextMembre>
                </SectionMembre> 
        </MembresGuildes>
    )
}

export default HeroMember