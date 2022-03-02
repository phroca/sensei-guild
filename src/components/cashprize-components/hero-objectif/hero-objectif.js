import * as React from "react"
import styled from "styled-components"

import imgGaia from "../../../images/home-img/hero-img/GAIA.png"
import imgOrion from "../../../images/home-img/hero-img/ORION.png"
import imgPegasus from "../../../images/home-img/hero-img/PEGASUS.png"
import { useMoralisQuery } from "react-moralis";

const CashprizeObjectifContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 400px;
    grid-gap: 50px;
    padding: 100px 0;
    @media (max-width: 640px) {
        grid-template-rows: auto;
    }

`

const CashprizeGuild = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    align-items: center;
`
const Text = styled.div`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 144px;
    text-align: center;
    @media (max-width: 640px) {
        font-size: 40px;
    }
`

const CashprizeContent = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px;
    max-height: 400px;
`

const CashprizeObjectifTitle = styled.div`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 100px;
    text-align: center;
    @media (max-width: 640px) {
        font-size: 1.7em;
    }
`
const CashprizeObjectifNumber = styled.div`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 144px;
    text-align: center;
    @media (max-width: 640px) {
        font-size: 40px;
    }
`

const SectionMembre = styled.div`
    display: grid;
    grid-template-rows: 260px 50px 50px;
    align-items: center;
    justify-content: center;
    justify-items: center;
    grid-gap: 5px;
    @media (max-width: 640px) {
        grid-template-rows: 80px 50px 50px;
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
        text-align: center;
    }
`

const HeroObjectif = () => {
    //const [limit, setLimit] = useState(3);
    const { data, error, isLoading } = useMoralisQuery("Cashprize", (query) =>
    query
    .equalTo("status", "created")
    );
    const { data: dataguild } = useMoralisQuery("Guild");
    const objectif = data[0];
    return(
        <CashprizeObjectifContainer>
            
            <CashprizeContent>
                <CashprizeObjectifTitle>OBJECTIF EN COURS :</CashprizeObjectifTitle>
                <CashprizeObjectifNumber> 
                {objectif && objectif.get("objectif")} MC
                </CashprizeObjectifNumber>
            </CashprizeContent>
            <CashprizeGuild>
            <SectionMembre>
                    <img className="img-gaia" src={imgGaia} width="260" height="260" alt="gaia" />
                    <TextMembre>{dataguild && dataguild.filter(item => item.get("name") === "gaia")[0]?.get("rewardTotalInSensei")} SENSEI</TextMembre>
                    <TextMembre>{dataguild && dataguild.filter(item => item.get("name") === "gaia")[0]?.get("rewardTotalInBNB")} BNB</TextMembre>
                </SectionMembre>
                <SectionMembre>
                    <img className="img-orion" src={imgOrion} width="260" height="260" alt="orion" />
                    <TextMembre>{dataguild && dataguild.filter(item => item.get("name") === "orion")[0]?.get("rewardTotalInSensei")} SENSEI</TextMembre>
                    <TextMembre>{dataguild && dataguild.filter(item => item.get("name") === "orion")[0]?.get("rewardTotalInBNB")} BNB</TextMembre>
                </SectionMembre>
                <SectionMembre>
                    <img className="img-pegasus" src={imgPegasus} width="260" height="260" alt="pegasus" />
                    <TextMembre>{dataguild && dataguild.filter(item => item.get("name") === "pegasus")[0]?.get("rewardTotalInSensei")} SENSEI</TextMembre>
                    <TextMembre>{dataguild && dataguild.filter(item => item.get("name") === "pegasus")[0]?.get("rewardTotalInBNB")} BNB</TextMembre>
                </SectionMembre>
            </CashprizeGuild>
        </CashprizeObjectifContainer>
    )
}

export default HeroObjectif