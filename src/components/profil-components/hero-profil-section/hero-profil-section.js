import * as React from "react"
import styled from "styled-components"
import HeroProfil from "../hero-profil/hero-profil"


const SectionContainer = styled.div`
    background: black;
    padding: 150px 150px 100px;
`

const HeroProfilSection = () => {

    return(
        <SectionContainer>
            <HeroProfil />
        </SectionContainer>
    )
}

export default HeroProfilSection