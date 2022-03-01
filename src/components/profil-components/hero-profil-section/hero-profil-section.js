import * as React from "react"
import styled from "styled-components"
import HeroProfil from "../hero-profil/hero-profil"
import ProfilLinks from "../profil-links/profil-links"


const SectionContainer = styled.div`
    background: black;
    padding: 150px 150px 100px;
    @media (max-width: 640px) {
            padding: 100px 50px 100px;
    }
`

const HeroProfilSection = () => {

    return(
        <SectionContainer>
            <HeroProfil />
            <ProfilLinks />
        </SectionContainer>
    )
}

export default HeroProfilSection