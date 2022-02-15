import * as React from "react"
import styled from "styled-components"
import { useMoralisQuery } from "react-moralis"
import { useEffect, useState } from "react"
const SectionContainer = styled.div`
    display: grid;
    grid-template-rows: 300px 1fr 1fr;
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

const HeadCashprize = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 60px);
    grid-gap: 20px;
    justify-content: center;
    justify-items: center;
    align-items: center;
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

const VictoireLine = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background: ${props => props.bgColor === "gaia" ? "linear-gradient(45deg, #2959FF, #3EA7EB)" : props.bgColor === "pegasus" ? "linear-gradient(45deg, #7E9BFF, #4A1AE4)" : props.bgColor === "orion" ? "linear-gradient(45deg, #FF4D28, #BC0000)" : "transparent"};
    border-radius: 30px;
    align-items: center;
    justify-items: center;
`

const VictoireSpan = styled.div`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 36px;
    text-transform: uppercase;
`

const HeroVictoiresScores = () => {
    const { data, error, isLoading } = useMoralisQuery("GuildVictories", (query) => query.limit(6));
    const { data: dataCash, error: errorCash, isLoading: isCashLoading } = useMoralisQuery("Cashprize", (query) => query.equalTo("status", "finished"));
    const[cashVictorySensei, setCashVictorySensei] = useState(0);
    const[cashVictoryBNB, setCashVictoryBNB] = useState(0);

    useEffect(()=> {
        if(dataCash && dataCash.length != 0){
            setCashVictorySensei(dataCash?.reduce((sum, current) => sum + current.get("totalRewardsInSensei"), 0));
            setCashVictoryBNB(dataCash?.reduce((sum, current) => sum + current.get("totalRewardsInBNB"), 0));
        }
    }, [dataCash]);

    return(
        <SectionContainer>
            <HeadCashprize>
                <Text>{cashVictorySensei} $SENSEI</Text>  
                <Text>{cashVictoryBNB} BNB</Text>
            </HeadCashprize>
            
            <VictoiresContainer>
                <SectionTitle>VICTOIRES & SCORES</SectionTitle>
                <VictoiresList>
                    <VictoireLine>
                        <VictoireSpan>Guilde</VictoireSpan>
                        <VictoireSpan>Gain BNB</VictoireSpan>
                        <VictoireSpan>Gain Sensei</VictoireSpan>
                        <VictoireSpan>% de gain</VictoireSpan>
                        <VictoireSpan>Date</VictoireSpan>
                    </VictoireLine>
                {data && data?.map((item, index) => {
                
                    const rewardDate = new Date(item?.get("rewardDate"));
                    return(
                        <VictoireLine key={index} bgColor={item?.get("guild")}>
                            <VictoireSpan>{item?.get("guild")}</VictoireSpan>
                            <VictoireSpan>{item?.get("rewardsInBNB")}</VictoireSpan>
                            <VictoireSpan>{item?.get("rewardsInSensei")}</VictoireSpan>
                            <VictoireSpan>{item?.get("rewardsPercent") !=='50' && item?.get("rewardsPercent") !=='25' ? "=" : item?.get("rewardsPercent")}</VictoireSpan>
                            <VictoireSpan>{rewardDate.getDay() + "/" + rewardDate.getMonth()}</VictoireSpan>
                        </VictoireLine>
                    )
                })}
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