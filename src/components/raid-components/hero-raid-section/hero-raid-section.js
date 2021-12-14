import * as React from "react"
import styled from "styled-components"
import HeroRaid from "../hero-raid/hero-raid"
import SectionConseil from "../section-conseil/section-conseil"


const SectionContainer = styled.div`
    background: black;
    padding: 150px 150px 100px;
`

const HeroRaidSection = () => {

    return(
        <SectionContainer>
            <HeroRaid />
            <SectionConseil />
        </SectionContainer>
    )
}

export default HeroRaidSection