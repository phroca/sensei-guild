import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SectionConseilContainer = styled.div`
    display: grid;
    grid-template-rows: 200px repeat(2, 1fr);
    justify-items: center;
    align-items: center; 
    padding: 50px 0;
`

const SectionConseilTitle = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 50px;
    justify-self: start;
`

const SectionConseilContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center; 
    grid-gap: 150px;
    padding: 50px 0;
`


const Text = styled.p`
    font-family: "AirbnbCerealMedium";
    color: white;
    font-size: 18px;
    justify-self: start;
`

const SectionConseil = ({propRaid}) => {
    const rules = propRaid && propRaid?.filter(item => !item?.get("isRaidOfTheDay"));
    return (
        <SectionConseilContainer>
            <SectionConseilTitle>
            ASTUCES & MESSAGES TYPE :
            </SectionConseilTitle>
            <SectionConseilContent>
                {rules.map(item=>(
                    <Text>
                    MISSION DU JOUR : <br />
                    CIBLE : {item?.get("target")}🎯<br />
                    {item?.get("linkTarget")}<br />
                    <p dangerouslySetInnerHTML={{__html: item?.get("ruleParagraph")}}></p>
                    </Text>
                ))}
                {rules.map(item=>(
                    <Text>
                    MISSION DU JOUR : <br />
                    CIBLE : {item?.get("target")}🎯<br />
                    {item?.get("linkTarget")}<br />
                    <p dangerouslySetInnerHTML={{__html: item?.get("ruleParagraph")}}></p>
                    </Text>
                ))}
            </SectionConseilContent>
        </SectionConseilContainer>
    ) 


}

export default SectionConseil