import * as React from "react"
import styled from "styled-components"


const SectionContainer = styled.div`
    display: grid;
    grid-template-rows: 60px 1fr 1fr;
    grid-gap: 50px;
    padding: 100px 0;
`
const SectionTitle = styled.h2`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 50px;
    text-align: left;
`

/** Victoire container */
const VictoiresContainer = styled.div`
    display: grid;
    grid-template-rows: 130px 1fr;
    grid-gap: 20px;
    padding: 0 50px;
`

const Head = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
`

const Text = styled.h3`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 48px;
    &.text--right{
        text-align: right;
    }
    &.text--left{
        text-align: left;
    }
    &.text--center{
        text-align: center;
    }
`
const VictoiresList = styled.div`
    display: grid;
    grid-template-rows: repeat(6, 85px);
    grid-gap: 5px;
`

/** Scores container */
const ScoresContainer = styled.div`
    display: grid;
    grid-template-rows: 130px 1fr 130px;
    grid-gap: 20px;
    padding: 0 50px;
    height: 850px;
`

const ScoresCardList = styled.div`
    
`

const ScoreCard = styled.div`
    display: grid;
    grid-template-rows: 160px 1fr;
    grid-gap: 30px;
    background: linear-gradient(45deg, #7E9BFF, #800AFF);
    border-radius: 60px;
    height: 660px;
`

const CardHead = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
`
const CardTextName = styled.h3`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 48px;
    grid-column-start: 2;
    text-align: center;
`
const CardTextMember = styled.h3`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 48px;
    grid-column-start: 3;
    text-align: center;
`

const CardParticipantList = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 85px);
    grid-gap: 5px;
`

const ScoreInvitNumber = styled.h4`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 36px;
    text-align: left;
`
const ScoreParticipationNumber = styled.h4`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 36px;
    text-align: right;
`

const HeroVictoiresScores = () => {

    return(
        <SectionContainer>
            <SectionTitle>VICTOIRES & SCORES</SectionTitle>
            <VictoiresContainer>
                <Head>
                    <Text className="text--left">1 230 000 000 $SENSEI</Text>  
                    <Text className="text--right">32 000 BNB</Text>
                </Head>
                <VictoiresList>

                </VictoiresList>
            </VictoiresContainer>
            <ScoresContainer>
                <ScoresCardList>
                    <Head>
                        <Text className="text--left">670 000 000 $SENSEI</Text>  
                        <Text className="text--right">6 000 BNB</Text>
                    </Head>
                    <ScoreCard>
                        <CardHead>
                            <CardTextName>PEGASUS</CardTextName>  
                            <CardTextMember>130 MEMBRES</CardTextMember>
                        </CardHead>
                        <CardParticipantList>

                        </CardParticipantList>
                    </ScoreCard>
                    <Head>
                        <ScoreInvitNumber>INVITATION : 320</ScoreInvitNumber>
                        <ScoreParticipationNumber>PARTICIPATION : 62%</ScoreParticipationNumber>
                    </Head>
                </ScoresCardList>
                
            </ScoresContainer>
        </SectionContainer>
    )
}

export default HeroVictoiresScores