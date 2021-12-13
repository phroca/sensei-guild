import * as React from "react"
import styled from "styled-components"

import imgGaia from "../../../images/inscription-img/gaia.png"
import imgOrion from "../../../images/inscription-img/orion.png"
import imgPegasus from "../../../images/inscription-img/pagasus.png"

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
    grid-gap: 5px;
`

const HeroMember = () => {

    return(
        <MembresGuildes>
                <SectionMembre>
                    <img className="img-gaia" src={imgGaia} width="260" height="260" alt="gaia" />
                </SectionMembre>
                <SectionMembre>
                    <img className="img-orion" src={imgOrion} width="260" height="260" alt="orion" />
                </SectionMembre>
                <SectionMembre>
                    <img className="img-pegasus" src={imgPegasus} width="260" height="260" alt="pegasus" />
                </SectionMembre> 
        </MembresGuildes>
    )
}

export default HeroMember