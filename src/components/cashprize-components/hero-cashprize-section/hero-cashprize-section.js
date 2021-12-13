import * as React from "react"
import styled from "styled-components"
import HeroCashprize from "../hero-cashprize/hero-cashprize"
import HeroMember from "../hero-member/hero-member"
import HeroObjectif from "../hero-objectif/hero-objectif"
import HeroVictoiresScores from "../hero-victoire-score/hero-victoire-score"

const SectionContainer = styled.div`
    background: black;
    padding: 150px 150px 100px;
`

const HeroCashprizeSection = () => {

    return(
        <SectionContainer>
            <HeroCashprize />
            <HeroMember />
            <HeroObjectif />
            <HeroVictoiresScores />
        </SectionContainer>
    )
}

export default HeroCashprizeSection