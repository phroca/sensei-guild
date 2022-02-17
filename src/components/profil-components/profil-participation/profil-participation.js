import * as React from "react"
import styled from "styled-components"
import { useEffect } from "react"
import { useMoralis, useMoralisQuery } from "react-moralis"
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
    const {isAuthenticated, user, setUserData} = useMoralis();
    const { data: dataProofs, error: errorProofs, isLoading: isProofsLoading } = useMoralisQuery("Proofs");
    const { data: dataCashprize, error: errorCashprize, isLoading: isCashprizeLoading } = useMoralisQuery("Cashprize", query => query.equalTo("status", "created").limit(1));
    const { data: dataRaid, error: errorRaid, isLoading: isRaidLoading } = useMoralisQuery("Raid");
    const [tauxParticipation, setTauxParticipation] = React.useState(0)

    useEffect(() => {
        if(user){
            if(dataProofs && dataCashprize && dataRaid){
                /*UNe ligne de preuve correspond à une raid*/
                const numberProofsOfUser = dataProofs.filter(elt => {
                    const eltId = elt?.get("user").id;
                    const statusProofValidated = elt?.get("statusProof") === "validated";
                    return eltId === user.id && statusProofValidated;
                });
                const numberRaidOfCashprize = dataRaid.filter(elt => {
                    const cashprizeId = elt?.get("cashprize")?.id;
                    return cashprizeId === dataCashprize[0]?.id;
                });

                const lengthProof = numberRaidOfCashprize.length !== 0 ? numberProofsOfUser.length / numberRaidOfCashprize.length : 0;
                setTauxParticipation((lengthProof) * 100);
            }
        }
        

    }, [dataProofs, dataCashprize, dataRaid])

    return(
        <ParticipationContainer>
            <ParticipationText>
                Taux de participation : {tauxParticipation} %
            </ParticipationText>
        </ParticipationContainer>
    )
}

export default ProfilParticipation