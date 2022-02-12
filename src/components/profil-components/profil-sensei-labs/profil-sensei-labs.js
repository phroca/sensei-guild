import * as React from "react"
import styled from "styled-components"
import SenseiUploadComponent from "./sensei-upload-component/sensei-upload-component"

const SenseiLabsContainer = styled.div`
    background: black;
    padding: 0px 150px 100px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-content: center;
    grid-gap: 50px;
    height: 700px;
`
const SenseiLabsTitle = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 50px;
    justify-self: start;
`

const SenseiLabsUploadContainer = styled.div`
    display: grid;
    grid-template-rows: 70px auto;
    grid-gap: 50px;
    justify-items: center;
    align-content: center;
`

const ProfilSenseiLabs = () => {
    return (
        <SenseiLabsContainer>
            <SenseiLabsTitle>
                SENSEI LABS
            </SenseiLabsTitle>
            <SenseiLabsUploadContainer>
                <SenseiUploadComponent/>
            </SenseiLabsUploadContainer>
        </SenseiLabsContainer>
    )
}


export default ProfilSenseiLabs