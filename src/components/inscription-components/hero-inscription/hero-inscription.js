import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import useInput from "../../../hooks/useInput"
import { useState } from "react"
import imgGaia from "../../../images/home-img/hero-img/GAIA.png"
import imgOrion from "../../../images/home-img/hero-img/ORION.png"
import imgPegasus from "../../../images/home-img/hero-img/PEGASUS.png"
import { useMoralis } from "react-moralis"

const HeroInscriptionContainer = styled.div`
    background: black;
    padding: 150px 450px 100px;
    &.bg-gaia {
        background: #272727;
    }
    &.bg-orion {
        background: #3b3b3b;
    }
    &.bg-pegasus {
        background: #5c5b5b;
    }

    button {
        justify-self: end;
    }
    
`
const FormWrapper = styled.form`
    display: grid;
    grid-template-rows: repeat(5, 115px);
    align-items: center;
    grid-gap: 20px;
    padding-bottom: 50px;
`;

const InscriptionInput = styled.input`
    background: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 0 20px;
    height: 64px;
    background-blend-mode: overlay;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25), 0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(250, 250, 250, 0.4);
    color: white;
    :focus {
        outline: none;
    }

`
const HeroInscriptionPseudosSocial = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-gap: 20px;
`

const HeroInscriptionText = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 24px;
    text-align: center;
`

const HeroInscriptionGuildeChoice = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    grid-gap: 20px;
`

const SectionChoix = styled.div`
    display: grid;
    grid-template-columns: 110px 20px auto;
    justify-content: center;
    align-items: center;

`

const LabelInscription = styled.label`
    color: white;
    text-transform: uppercase;
`
const HeroInscription = () => {
    const {isAuthenticated, user, setUserData} = useMoralis();
    const email = useInput("");
    const telegram = useInput("");
    const twitter = useInput("");
    const [guild, setGuild] = useState();

    const handleGaiaChange = () => {
        setGuild("gaia")
    };

    const handleOrionChange = () => {
        setGuild("orion")
    };

    const handlePegasusChange = () => {
        setGuild("pegasus")
    };

    
    const submit = (event) => {
        event.preventDefault();
        if(isAuthenticated){
            if(user){
                setUserData({
                    email: email.value,
                    telegramUser: telegram.value,
                    twitterUser: twitter.value,
                    guildName: guild
                  })
            }
        }
    }
        
    return (
        <HeroInscriptionContainer>
            <FormWrapper onSubmit={(e) => submit(e)}>
                <InscriptionInput placeholder="Email" {...email}></InscriptionInput>

                <HeroInscriptionPseudosSocial>
                    <InscriptionInput placeholder="@telegram" {...telegram}></InscriptionInput>
                    <InscriptionInput placeholder="@twitter" {...twitter}></InscriptionInput>
                </HeroInscriptionPseudosSocial>
                <HeroInscriptionText>
                    Vivez l’aventure à plusieurs et remportez <br />
                    des cashprize exceptionnels
                </HeroInscriptionText>
                <HeroInscriptionGuildeChoice>
                <SectionChoix>
                    <img className="img-gaia" src={imgGaia} width="110" height="110" alt="gaia" />
                    <input type="radio" value="gaia" name="guild" id="gaia"  onChange={handleGaiaChange} />
                    <LabelInscription htmlFor="gaia">Gaia</LabelInscription>
                </SectionChoix>
                <SectionChoix>
                    <img className="img-orion" src={imgOrion} width="110" height="110" alt="orion" />
                    <input type="radio" value="orion" name="guild" id="orion" onChange={handleOrionChange} />
                    <LabelInscription htmlFor="orion">Orion</LabelInscription>
                </SectionChoix>
                <SectionChoix>
                    <img className="img-pegasus" src={imgPegasus} width="110" height="110" alt="pegasus" />
                    <input type="radio" value="pegasus" name="guild" id="pegasus" onChange={handlePegasusChange} />
                    <LabelInscription htmlFor="pegasus">Pegasus</LabelInscription>
                </SectionChoix>
                    
                    
                    
                </HeroInscriptionGuildeChoice>
                <button type="submit" className="sensei-btn">GO</button>
            </FormWrapper>
        </HeroInscriptionContainer>
    ) 

}

export default HeroInscription

