import * as React from "react"
import styled from "styled-components"
import { useMoralisQuery } from "react-moralis"
import { useEffect, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

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
    text-transform: uppercase;
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
    width: 100%;
`

const ScoresCardList = styled.div`
    
`

const ScoreCard = styled.div`
    display: grid;
    grid-template-rows: 160px 1fr;
    grid-gap: 30px;
    background: ${props => props.bgMemberColor === "gaia" ? "linear-gradient(45deg, #2959FF, #3EA7EB)" : props.bgMemberColor === "pegasus" ? "linear-gradient(45deg, #7E9BFF, #4A1AE4)" : props.bgMemberColor === "orion" ? "linear-gradient(45deg, #FF4D28, #BC0000)" : "transparent"};
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
    /*display: grid;
    grid-template-rows: repeat(4, 85px);
    grid-gap: 5px;*/
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

const ScoreList = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 85px);
    grid-gap: 5px;
`

const ScoreLine = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
`

const ScoreSpan = styled.div`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 30px;
    text-transform: uppercase;
`

const HeroVictoiresScores = () => {
    const { data, error} = useMoralisQuery("GuildVictories", (query) => query.limit(6));
    const { data: dataCash, error: errorCash } = useMoralisQuery("Cashprize", (query) => query.equalTo("status", "finished"));
    const { data: dataGuild, error: errorGuild } = useMoralisQuery("Guild");
    const { data: dataUserGaia, error: errorUserGaia  } = useMoralisQuery("User", (query) => query.equalTo("guildName", "gaia").descending("rewardsInSensei").limit(4));
    const { data: dataUserOrion, error: errorUserOrion } = useMoralisQuery("User", (query) => query.equalTo("guildName", "orion").descending("rewardsInSensei").limit(4));
    const { data: dataUserPegasus, error: errorUserPegasus } = useMoralisQuery("User", (query) => query.equalTo("guildName", "pegasus").descending("rewardsInSensei").limit(4));

    const [gaiaMember, setGaiaMember] = useState(0);
    const [orionMember, setOrionMember] = useState(0);
    const [pegasusMember, setPegasusMember] = useState(0);

    /* Victory part */
    const [cashVictorySensei, setCashVictorySensei] = useState(0);
    const [cashVictoryBNB, setCashVictoryBNB] = useState(0);
    /* <==== participation part ====>*/
    /*PEGASUS*/
    const [totalRewardPegasusSensei, setTotalRewardPegasusSensei] = useState(0);
    const [totalRewardPegasusBNB, setTotalRewardPegasusBNB] = useState(0);
    /*GAIA*/
    const [totalRewardGaiaSensei, setTotalRewardGaiaSensei] = useState(0);
    const [totalRewardGaiaBNB, setTotalRewardGaiaBNB] = useState(0);
    /*ORION*/
    const [totalRewardOrionSensei, setTotalRewardOrionSensei] = useState(0);
    const [totalRewardOrionBNB, setTotalRewardOrionBNB] = useState(0);


    useEffect(()=> {
        if(dataCash && dataCash.length != 0){
            setCashVictorySensei(dataCash?.reduce((sum, current) => sum + current.get("totalRewardsInSensei"), 0));
            setCashVictoryBNB(dataCash?.reduce((sum, current) => sum + current.get("totalRewardsInBNB"), 0));
        }

        /* Alimentation des valeur des gains pour chaque guilde total passés*/
        if(data) {
            setTotalRewardGaiaSensei(data?.filter(item => item?.get("guild") === "gaia").reduce((sum, current) => sum + current.get("rewardsInSensei"), 0));
            setTotalRewardGaiaBNB(data?.filter(item => item?.get("guild") === "gaia").reduce((sum, current) => sum + current.get("rewardsInBNB"), 0));
            setTotalRewardPegasusSensei(data?.filter(item => item?.get("guild") === "pegasus").reduce((sum, current) => sum + current.get("rewardsInSensei"), 0));
            setTotalRewardPegasusBNB(data?.filter(item => item?.get("guild") === "pegasus").reduce((sum, current) => sum + current.get("rewardsInBNB"), 0));
            setTotalRewardOrionSensei(data?.filter(item => item?.get("guild") === "orion").reduce((sum, current) => sum + current.get("rewardsInSensei"), 0));
            setTotalRewardOrionBNB(data?.filter(item => item?.get("guild") === "orion").reduce((sum, current) => sum + current.get("rewardsInBNB"), 0));
        }

        if (dataGuild) {
            setGaiaMember(dataGuild.filter(item => item.get("name") === "gaia")[0]?.get("memberSize"));
            setOrionMember(dataGuild.filter(item => item.get("name") === "orion")[0]?.get("memberSize"));
            setPegasusMember(dataGuild.filter(item => item.get("name") === "pegasus")[0]?.get("memberSize"));
        }
    }, [dataCash, data, dataGuild]);

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
                {data && data.length > 0 && data?.map((item, index) => {
                    
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
            
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <ScoresContainer>
                            <ScoresCardList>
                                <Head>
                                    <Text className="text--left">{totalRewardGaiaSensei} $SENSEI</Text>  
                                    <Text className="text--right">{totalRewardGaiaBNB} BNB</Text>
                                </Head>
                                <ScoreCard bgMemberColor="gaia">
                                    <CardHead>
                                        <CardTextName>GAIA</CardTextName>  
                                        <CardTextMember>{gaiaMember} MEMBRES</CardTextMember>
                                    </CardHead>
                                    <CardParticipantList>
                                    <ScoreList>
                                        <ScoreLine>
                                            <ScoreSpan>Pseudo</ScoreSpan>
                                            <ScoreSpan>Gain BNB</ScoreSpan>
                                            <ScoreSpan>Gain Sensei</ScoreSpan>
                                        </ScoreLine>
                                        {dataUserGaia && dataUserGaia?.map((item, index) => {
                                            return(
                                                <ScoreLine key={index}>
                                                    <ScoreSpan>{item?.get("telegramUser")}</ScoreSpan>
                                                    <ScoreSpan>{item?.get("rewardsInBNB")}</ScoreSpan>
                                                    <ScoreSpan>{item?.get("rewardsInSensei")}</ScoreSpan>
                                                </ScoreLine>
                                            )
                                        })}
                                    </ScoreList>
                                    </CardParticipantList>
                                </ScoreCard>
                                {/* <Head>
                                    <ScoreInvitNumber>INVITATION : 320</ScoreInvitNumber>
                                    <ScoreParticipationNumber>PARTICIPATION : 62%</ScoreParticipationNumber>
                                </Head> */}
                            </ScoresCardList>
                        </ScoresContainer>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ScoresContainer>
                            <ScoresCardList>
                                <Head>
                                    <Text className="text--left">{totalRewardOrionSensei} $SENSEI</Text>  
                                    <Text className="text--right">{totalRewardOrionBNB} BNB</Text>
                                </Head>
                                <ScoreCard bgMemberColor="orion">
                                    <CardHead >
                                        <CardTextName>ORION</CardTextName>  
                                        <CardTextMember>{orionMember} MEMBRES</CardTextMember>
                                    </CardHead>
                                    <CardParticipantList>
                                    <ScoreList>
                                        <ScoreLine>
                                            <ScoreSpan>Pseudo</ScoreSpan>
                                            <ScoreSpan>Gain BNB</ScoreSpan>
                                            <ScoreSpan>Gain Sensei</ScoreSpan>
                                        </ScoreLine>
                                        {dataUserOrion && dataUserOrion?.map((item, index) => {
                                            return(
                                                <ScoreLine key={index}>
                                                    <ScoreSpan>{item?.get("telegramUser")}</ScoreSpan>
                                                    <ScoreSpan>{item?.get("rewardsInBNB")}</ScoreSpan>
                                                    <ScoreSpan>{item?.get("rewardsInSensei")}</ScoreSpan>
                                                </ScoreLine>
                                            )
                                        })}
                                    </ScoreList>
                                    </CardParticipantList>
                                </ScoreCard>
                                {/* <Head>
                                    <ScoreInvitNumber>INVITATION : 320</ScoreInvitNumber>
                                    <ScoreParticipationNumber>PARTICIPATION : 62%</ScoreParticipationNumber>
                                </Head> */}
                            </ScoresCardList>
                        </ScoresContainer>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ScoresContainer>
                            <ScoresCardList>
                                <Head>
                                    <Text className="text--left">{totalRewardPegasusSensei} $SENSEI</Text>  
                                    <Text className="text--right">{totalRewardPegasusBNB} BNB</Text>
                                </Head>
                                <ScoreCard bgMemberColor="pegasus">
                                    <CardHead>
                                    <Text>Classement</Text>
                                        <CardTextName>PEGASUS</CardTextName>  
                                        <CardTextMember>{pegasusMember} MEMBRES</CardTextMember>
                                    </CardHead>
                                    <CardParticipantList>
                                    <ScoreList>
                                        <ScoreLine>
                                            <ScoreSpan>Pseudo</ScoreSpan>
                                            <ScoreSpan>Gain BNB</ScoreSpan>
                                            <ScoreSpan>Gain Sensei</ScoreSpan>
                                        </ScoreLine>
                                        {dataUserPegasus && dataUserPegasus?.map((item, index) => {
                                            return(
                                                <ScoreLine key={index}>
                                                    <ScoreSpan>{item?.get("telegramUser")}</ScoreSpan>
                                                    <ScoreSpan>{item?.get("rewardsInBNB")}</ScoreSpan>
                                                    <ScoreSpan>{item?.get("rewardsInSensei")}</ScoreSpan>
                                                </ScoreLine>
                                            )
                                        })}
                                    </ScoreList>
                                    </CardParticipantList>
                                </ScoreCard>
                                {/* <Head>
                                    <ScoreInvitNumber>INVITATION : 320</ScoreInvitNumber>
                                    <ScoreParticipationNumber>PARTICIPATION : 62%</ScoreParticipationNumber>
                                </Head> */}
                            </ScoresCardList>
                        </ScoresContainer>
                    </SwiperSlide>
                </Swiper>  
            
        </SectionContainer>
    )
}

export default HeroVictoiresScores