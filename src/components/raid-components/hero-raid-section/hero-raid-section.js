import * as React from "react"
import styled from "styled-components"
import HeroRaid from "../hero-raid/hero-raid"
import SectionConseil from "../section-conseil/section-conseil"
import { useMoralisQuery } from "react-moralis";

const SectionContainer = styled.div`
    background: black;
    padding: 150px 150px 100px;
`

const HeroRaidSection = () => {
    const { data, error, isLoading } = useMoralisQuery("Rule");

    return(
        <SectionContainer>
            <HeroRaid propRaid={data}/>
            <SectionConseil propRaid={data}/>
        </SectionContainer>
    )
}

export default HeroRaidSection