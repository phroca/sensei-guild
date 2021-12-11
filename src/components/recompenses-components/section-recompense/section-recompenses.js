import * as React from "react"
import styled from "styled-components"

import imgGaia from "../../../images/inscription-img/gaia.png"
import imgOrion from "../../../images/inscription-img/orion.png"
import imgPegasus from "../../../images/inscription-img/pagasus.png"


const SectionRecompensesContainer = styled.div`
    background: black;
    padding: 150px 350px 100px;
    display: grid;
    grid-template-rows: 320px 50px auto;
    align-items: center;
    justify-content: center;
    grid-gap: 50px;
    
`
const RecompenseMembresGuildes = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 20px;
`;

const SectionMembre = styled.div`
    display: grid;
    grid-template-rows: 260px 50px;
    align-items: center;
    justify-content: center;
    grid-gap: 5px;
`

const RecompensesTitle = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 50px;
    text-align: center;
`

const RecompensesText = styled.form`
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    align-items: center;
    justify-content: center;
    grid-gap: 30px;
`

const RecompensePart = styled.form`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
`
const RecompensesSubtitle = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 22px;
    text-align: center;
`
const RecompensesParagraph = styled.p`
    font-family: "AirbnbCerealMedium";
    color: white;
    font-size: 18px;
    text-align: center;
`

const SectionRecompenses = () => {
 

    return (
        <SectionRecompensesContainer>
            <RecompenseMembresGuildes>
                <SectionMembre>
                    <img className="img-gaia" src={imgGaia} width="260" height="260" alt="gaia" />
                </SectionMembre>
                <SectionMembre>
                    <img className="img-orion" src={imgOrion} width="260" height="260" alt="orion" />
                </SectionMembre>
                <SectionMembre>
                    <img className="img-pegasus" src={imgPegasus} width="260" height="260" alt="pegasus" />
                </SectionMembre> 
            </RecompenseMembresGuildes>
            <RecompensesTitle>
                RECOMPENSES & CONDITIONS 
            </RecompensesTitle>
            <RecompensesText>
                <RecompensePart>
                    <RecompensesSubtitle>⚔️ Récompense :</RecompensesSubtitle>
                    <RecompensesParagraph>
                        Les règles sont simple. Nous allons doubler le montant du CASSPRIZE a chaque fois 
                        que la market cap du $SENSEI double.  Les récoompenses serons distribué en BNB ou 
                        en SENSEI. Le montant du cash prize est consultable depuis la page “xx” ou sur 
                        bscscan sur l’addresse du wallet prévue à ceette effet.
                    </RecompensesParagraph>
                </RecompensePart>
                <RecompensePart>
                    <RecompensesSubtitle>⚔️ Être dans une guilde :</RecompensesSubtitle>
                    <RecompensesParagraph>
                        1 - Avoir la photo du logo SENSEI avec le halo de votre guilde en photo de profil.
                        2 - Ajouter “$SENSEI” + le nom de votre guilde dans votre pseudo Telegram & Twitter.
                        3 - Avoir du SENSEi dans son wallet metamask
                        Nb : Les conditions doivent être respecté durant le raid, en dehors, libre à vous 
                        de rétablir les informations sur votre profil Twitter & Telegram. 
                    </RecompensesParagraph>
                </RecompensePart>
                <RecompensePart>
                    <RecompensesSubtitle>⚔️ Participer au raid :</RecompensesSubtitle>
                    <RecompensesParagraph>
                        1 - Effectuer un minimum de 75% des raids pendant la durée de chaque Cashprize. 
                        2 -  Suivre notre compte Twitter et être abonné au Telegram. 

                        Important :️  Pour chaque action effectué, veuilliez vous assurer de fournir les 
                        preuves & screens de vos raids dans les espaces prévue à cette effet sur votre 
                        profil pour être eligible au cash prize. Prêter attention à bien faire apparaitre 
                        votre pseudo sur les screens. 

                        Vérifier votre @telegram et @twitter renseigné à votre inscription pour vous 
                        assurer qu’ils soit en adéquation avec les screens enregistré.
                    </RecompensesParagraph>
                </RecompensePart>
                <RecompensePart>
                    <RecompensesSubtitle>⚔️ Annonces des raids & règles de participation :</RecompensesSubtitle>
                    <RecompensesParagraph>
                        Soyez attentif ! Les règles sont annoncées sur notre Twitter et notre Telegram 
                        ainsi que sur notre page officiel RAID, 24H à l’avance.  ( Discord à venir ) 
                    </RecompensesParagraph>
                </RecompensePart>
                <RecompensePart>
                    <RecompensesSubtitle>⚔️ Qui gagne ? :</RecompensesSubtitle>
                    <RecompensesParagraph>
                        Les guildes on était crée pour soudée la communauté SENSEI et vous faire 
                        vivre une toute nouvelle expérience communautaire. Pour cela nous allons 
                        nous assurer que tous les joueurs qui repespectent les conditions de 
                        participations se verrons attribuer une récompense. 
                        Par moment les guilde se battrons ensemble, à d’autres elles se 
                        challegerons dans un esprit de camaraderi pour pimenter l’aventure.

                        Dans le cas ou les guildes s’affrontent nous nous baserons sur 
                        le Taux de participation/guilde + le nombre d’invitation/guilde 
                        
                        pour récompenser la plus méritante.
                    </RecompensesParagraph>
                </RecompensePart>
                <RecompensePart>
                    <RecompensesSubtitle>⚔️ Securité :</RecompensesSubtitle>
                    <RecompensesParagraph>
                        Une fois le jeu commencé, il est impossible de changer de guilde. 

                        Une guilde ne peux pas contenir plus de 50% du nombre de joueur répartie 
                        entre toutes les guildes. 

                        Cette règle nous assure d’avoir une équité et de rester dans un esprit d’équipe. Les 
                        concours inter guilde ne sont pas là pour nous diviser et c’est une façon de se 
                        challengeant ensemble avec fun.

                    </RecompensesParagraph>
                </RecompensePart>
            </RecompensesText>
        </SectionRecompensesContainer>
    ) 

}

export default SectionRecompenses

