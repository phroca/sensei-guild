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
    align-items: center;
    justify-content: center;
    grid-gap: 30px;
    max-width: 1000px;
`

const RecompensePart = styled.form`
    display: grid;
    grid-template-rows: 50px 1fr;
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
                        Les règles sont simple. Nous allons doubler le montant du CASSPRIZE a chaque fois <br />
                        que la market cap du $SENSEI double.  Les récoompenses serons distribué en BNB ou <br />
                        en SENSEI. Le montant du cash prize est consultable depuis la page “xx” ou sur <br />
                        bscscan sur l’addresse du wallet prévue à ceette effet.
                    </RecompensesParagraph>
                </RecompensePart>
                <RecompensePart>
                    <RecompensesSubtitle>⚔️ Être dans une guilde :</RecompensesSubtitle>
                    <RecompensesParagraph>
                        1 - Avoir la photo du logo SENSEI avec le halo de votre guilde en photo de profil.<br />
                        2 - Ajouter “$SENSEI” + le nom de votre guilde dans votre pseudo Telegram & Twitter.<br />
                        3 - Avoir du SENSEi dans son wallet metamask<br />
                        Nb : Les conditions doivent être respecté durant le raid, en dehors, libre à vous <br />
                        de rétablir les informations sur votre profil Twitter & Telegram.
                    </RecompensesParagraph>
                </RecompensePart>
                <RecompensePart>
                    <RecompensesSubtitle>⚔️ Participer au raid :</RecompensesSubtitle>
                    <RecompensesParagraph>
                        1 - Effectuer un minimum de 75% des raids pendant la durée de chaque Cashprize. <br />
                        2 -  Suivre notre compte Twitter et être abonné au Telegram. <br /><br />

                        Important :️  Pour chaque action effectué, veuilliez vous assurer de fournir les <br />
                        preuves & screens de vos raids dans les espaces prévue à cette effet sur votre <br />
                        profil pour être eligible au cash prize. Prêter attention à bien faire apparaitre <br />
                        votre pseudo sur les screens. <br /><br />

                        Vérifier votre @telegram et @twitter renseigné à votre inscription pour vous <br />
                        assurer qu’ils soit en adéquation avec les screens enregistré.
                    </RecompensesParagraph>
                </RecompensePart>
                <RecompensePart>
                    <RecompensesSubtitle>⚔️ Annonces des raids & règles de participation :</RecompensesSubtitle>
                    <RecompensesParagraph>
                        Soyez attentif ! Les règles sont annoncées sur notre Twitter et notre Telegram <br />
                        ainsi que sur notre page officiel RAID, 24H à l’avance.  ( Discord à venir )
                    </RecompensesParagraph>
                </RecompensePart>
                <RecompensePart>
                    <RecompensesSubtitle>⚔️ Qui gagne ? :</RecompensesSubtitle>
                    <RecompensesParagraph>
                        Les guildes on était crée pour soudée la communauté SENSEI et vous faire <br />
                        vivre une toute nouvelle expérience communautaire. Pour cela nous allons <br />
                        nous assurer que tous les joueurs qui repespectent les conditions de <br />
                        participations se verrons attribuer une récompense. <br />
                        Par moment les guilde se battrons ensemble, à d’autres elles se <br />
                        challegerons dans un esprit de camaraderi pour pimenter l’aventure.<br /><br />

                        Dans le cas ou les guildes s’affrontent nous nous baserons sur <br />
                        le Taux de participation/guilde + le nombre d’invitation/guilde <br />          
                        pour récompenser la plus méritante.
                    </RecompensesParagraph>
                </RecompensePart>
                <RecompensePart>
                    <RecompensesSubtitle>⚔️ Securité :</RecompensesSubtitle>
                    <RecompensesParagraph>
                        Une fois le jeu commencé, il est impossible de changer de guilde.<br /><br />

                        Une guilde ne peux pas contenir plus de 50% du nombre de joueur répartie <br />
                        entre toutes les guildes. <br /><br />

                        Cette règle nous assure d’avoir une équité et de rester dans un esprit d’équipe. Les <br />
                        concours inter guilde ne sont pas là pour nous diviser et c’est une façon de se <br />
                        challengeant ensemble avec fun.
                    </RecompensesParagraph>
                </RecompensePart>
            </RecompensesText>
        </SectionRecompensesContainer>
    ) 

}

export default SectionRecompenses

