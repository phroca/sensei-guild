import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ProfilLinksContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    grid-gap: 50px;
    padding: 50px 0;
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, auto);
    }
`

const ProfilLinks = () => {


    return (
        <ProfilLinksContainer>
            <Link to="/recompenses"><button className="sensei-btn big-btn">CONDITIONS DE PARTICIPATION</button></Link>
            <Link to="/cashprize"><button className="sensei-btn big-btn">CASHPRIZE & SCORE</button></Link>
            <Link to="/raid"><button className="sensei-btn big-btn">RAID EN COURS</button></Link>
        </ProfilLinksContainer>
    )
}

export default ProfilLinks