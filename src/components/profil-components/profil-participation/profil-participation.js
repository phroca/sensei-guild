import * as React from "react"
import styled from "styled-components"
import { useEffect } from "react"
import { useMoralis } from "react-moralis"
const ParticipationContainer = styled.div`
    background-color: black;
    padding: 150px 150px 100px;

`

const ParticipationText = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 50px;
    text-transform: uppercase;
`
const ProfilParticipation = () => {
    //const {isAuthenticated, user, setUserData} = useMoralis();
    //useEffect

    return(
        <ParticipationContainer>
            <ParticipationText>
                Taux de participation : 10 %
            </ParticipationText>
        </ParticipationContainer>
    )
}

export default ProfilParticipation