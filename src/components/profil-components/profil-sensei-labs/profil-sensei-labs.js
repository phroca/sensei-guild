import * as React from "react"
import styled from "styled-components"
import SenseiUploadComponent from "./sensei-upload-component/sensei-upload-component"
import { useState } from "react"

const SenseiLabsContainer = styled.div`
    background: black;
    padding: 150px 150px 100px;
    display: grid;
    grid-template-rows: 110px auto;
    justify-items: center;
    align-content: center;
    grid-gap: 50px;
`
const SenseiLabsTitle = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 50px;
    text-align: center;
`

const SenseiLabsUploadContainer = styled.div`
    display: grid;
    grid-template-rows: 70px auto;
    grid-gap: 50px;
    justify-items: center;
    align-content: center;
`

const UploadSelect = styled.select`
    background: transparent;
    color: white;
    font-family: 'AirbnbCerealBlack';
    font-size: 50px;
    outline: none;
    border: none;
`

const UploadOption = styled.option`
    background: black;
    color: white;
`

const ProfilSenseiLabs = () => {
    const[typeUpload, setTypeUpload] = useState("twitter");

    const handleChange = (e) => {
        setTypeUpload(e.target.value)
    }

    return (
        <SenseiLabsContainer>
            <SenseiLabsTitle>
                SENSEI LABS
            </SenseiLabsTitle>
            <SenseiLabsUploadContainer>
                <UploadSelect onChange={(e) => handleChange(e)}>
                    <UploadOption value="twitter">TWITTER LABS</UploadOption>
                    <UploadOption value="telegram">TELEGRAM LABS</UploadOption>
                    <UploadOption value="autre">AUTRE</UploadOption>
                </UploadSelect>
                <SenseiUploadComponent selectedValue={typeUpload}/>
            </SenseiLabsUploadContainer>
        </SenseiLabsContainer>
    )
}


export default ProfilSenseiLabs