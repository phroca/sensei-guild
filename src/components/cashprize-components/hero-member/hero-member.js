import * as React from "react"
import styled from "styled-components"
import { useState, useEffect } from "react"
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
    @media (max-width: 640px) {
        grid-template-rows: 80px 50px;
        img {
            width: 70px;
            height: 70px;
        }
    }
`

const TextMembre = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 24px;
    text-transform: uppercase;
    @media (max-width: 640px) {
        font-size: 12px;
    }
`
const HeroMember = () => {
    const { data, error, isLoading } = useMoralisQuery("Guild");
    const [gaiaMember, setGaiaMember] = useState(0);
    const [orionMember, setOrionMember] = useState(0);
    const [pegasusMember, setPegasusMember] = useState(0);

    useEffect(() => {
        if(data){
            setGaiaMember(data.filter(item => item.get("name") === "gaia")[0]?.get("memberSize"));
            setOrionMember(data.filter(item => item.get("name") === "orion")[0]?.get("memberSize"));
            setPegasusMember(data.filter(item => item.get("name") === "pegasus")[0]?.get("memberSize"));
        }
    }, [data]);

    return(
        <MembresGuildes>
                <SectionMembre>
                    <img className="img-gaia" src={imgGaia} width="260" height="260" alt="gaia" />
                    <TextMembre>{data && gaiaMember} Membres</TextMembre>
                </SectionMembre>
                <SectionMembre>
                    <img className="img-orion" src={imgOrion} width="260" height="260" alt="orion" />
                    <TextMembre>{data && orionMember} Membres</TextMembre>
                </SectionMembre>
                <SectionMembre>
                    <img className="img-pegasus" src={imgPegasus} width="260" height="260" alt="pegasus" />
                    <TextMembre>{data && pegasusMember} Membres</TextMembre>
                </SectionMembre> 
        </MembresGuildes>
    )
}

export default HeroMember