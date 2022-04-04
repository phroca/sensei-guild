import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SectionConseilContainer = styled.div`
    display: grid;
    grid-template-rows: 200px repeat(2, auto);
    justify-items: center;
    align-items: center; 
    padding: 50px 0;
    @media (max-width: 640px) {
        grid-template-rows: 100px repeat(2, auto);
    }
`

const SectionConseilTitle = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 50px;
    justify-self: start;
    @media (max-width: 640px) {
        text-align: center;
        font-size: 34px;
    }
`

const SectionConseilContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center; 
    grid-gap: 150px;
    padding: 50px 0;
    @media (max-width: 640px) {
        grid-template-columns:  1fr;
        grid-template-rows: repeat(2, 1fr);
    }
`


const Text = styled.div`
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
                {rules.map((item, index)=>(
                    <Text key={index}>
                    MISSION DU JOUR : <br />
                    CIBLE : {item?.get("target")}🎯<br />
                    {item?.get("linkTarget")}<br />
                    <div dangerouslySetInnerHTML={{__html: item?.get("ruleParagraph")}}></div>
                    </Text>
                ))}
                {/* {rules.map((item, index)=>(
                    <Text key={index}>
                    MISSION DU JOUR : <br />
                    CIBLE : {item?.get("target")}🎯<br />
                    {item?.get("linkTarget")}<br />
                    <div dangerouslySetInnerHTML={{__html: item?.get("ruleParagraph")}}></div>
                    </Text>
                ))} */}
            </SectionConseilContent>
        </SectionConseilContainer>
    ) 


}

export default SectionConseil