import * as React from "react"
import styled from "styled-components"

import imgGaia from "../../../images/home-img/hero-img/GAIA.png"
import imgOrion from "../../../images/home-img/hero-img/ORION.png"
import imgPegasus from "../../../images/home-img/hero-img/PEGASUS.png"
import { useMoralisQuery } from "react-moralis";

const SectionRecompensesContainer = styled.div`
    background: black;
    padding: 150px 150px 100px;
    display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;
    grid-gap: 50px;
    
`
const RecompenseMembresGuildes = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 20px;
    max-width: 1000px;
    padding-bottom: 50px;
`;

const SectionMembre = styled.div`
    display: grid;
    grid-template-rows: 260px 50px;
    align-items: center;
    justify-content: center;
    justify-items: center;
    grid-gap: 5px;
`

const RecompensesTitle = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 40px;
    text-transform: uppercase;
`

const RecompensesText = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
    justify-content: center;
    grid-gap: 100px;
    justify-items: start;
    padding-bottom: 50px;
`

const RecompensePart = styled.div`
    display: grid;
    grid-template-rows: 50px 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
`
const RecompensesSubtitle = styled.h1`
    font-family: "AirbnbCerealMedium";
    color: white;
    font-size: 22px;
    text-transform: uppercase;
`
const RecompensesParagraph = styled.p`
    font-family: "AirbnbCerealMedium";
    color: white;
    font-size: 18px;
`
const TextMembre = styled.h1`
    font-family: "AirbnbCerealBlack";
    color: white;
    font-size: 24px;
    text-transform: uppercase;
`

const SectionRecompenseImg = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    .hero--img-gaia{
        grid-column-start: 2;
        grid-row-start: 1;
    }
    .hero--img-orion{
        grid-column-start: 1;
        grid-row-start: 2;
    }
    .hero--img-pegasus{
        grid-column-start: 3;
        grid-row-start: 2;
    }
`
const SectionRecompenses = () => {
    const { data, error, isLoading } = useMoralisQuery("Guild");

    return (
        <SectionRecompensesContainer>
            <RecompenseMembresGuildes>
                <SectionMembre>
                    <img className="img-gaia" src={imgGaia} width="260" height="260" alt="gaia" />
                    <TextMembre>{data && data.filter(item => item.get("name") === "gaia")[0]?.get("memberSize")} Membres</TextMembre>
                </SectionMembre>
                <SectionMembre>
                    <img className="img-orion" src={imgOrion} width="260" height="260" alt="orion" />
                    <TextMembre>{data && data.filter(item => item.get("name") === "orion")[0]?.get("memberSize")} Membres</TextMembre>
                </SectionMembre>
                <SectionMembre>
                    <img className="img-pegasus" src={imgPegasus} width="260" height="260" alt="pegasus" />
                    <TextMembre>{data && data.filter(item => item.get("name") === "pegasus")[0]?.get("memberSize")} Membres</TextMembre>
                </SectionMembre>  
            </RecompenseMembresGuildes>

            <RecompensesText>
                <RecompensePart>
                    <RecompensesTitle>Une récompense pour tous</RecompensesTitle>
                    <RecompensesSubtitle>Récompense :</RecompensesSubtitle>
                    <RecompensesParagraph>
                    - Un wallet perçoit 2% de chaque transaction en SENSEI. Chaque fois que la <br />
                    market cap du $SENSEI double nous distribuons la valeurs total des $SENSEI <br />
                    présent dans ce wallet entre tous les participants du Cashprize SENSEI.  <br /><br />

                    - Les récompenses serons distribué en BNB ou en SENSEI afin que ce système <br />
                    soit bénéfique au cours du token $SENSEI. Le montant du cash prize est <br />
                    consultable depuis notre page CASHPRIZE ou sur bscscan aux addresses <br />
                    des wallet SENSEI et BNB prévue à cette effet.<br />
                    </RecompensesParagraph>
                    <RecompensesSubtitle>Qui gagne ?</RecompensesSubtitle>
                    <RecompensesParagraph>
                        - Les guildes on était crée pour soudée la communauté SENSEI et vous faire <br />
                        vivre une toute nouvelle expérience communautaire. Pour cela nous allons <br />
                        nous assurer que tous les joueurs qui repespectent les conditions de <br />
                        participations se verrons attribuer une récompense. <br />
                        Par moment les guilde se battrons ensemble, à d’autres elles se <br />
                        challegerons dans un esprit de camaraderi pour pimenter l’aventure.<br /><br />

                        - Dans le cas ou les guildes s’affrontent nous nous baserons sur <br />
                        le Taux de participation/guilde + le nombre d’invitation/guilde <br />          
                        pour récompenser la plus méritante.<br />
                    </RecompensesParagraph>
                </RecompensePart>
                <RecompensePart>
                    <RecompensesTitle>Conditions de participation</RecompensesTitle>
                    <RecompensesSubtitle>Être dans une guilde :</RecompensesSubtitle>
                    <RecompensesParagraph>
                    1 - Ajouter l’image du logo SENSEI avec le halo de votre guilde en photo de profil.<br /><br />
                    2 - Ajouter “$SENSEI” + le nom de votre guilde dans votre pseudo Telegram & Twitter.<br /><br />
                    - Les conditions doivent être respecté durant le raid, en dehors, libre à vous <br />
                    de rétablir les informations sur votre profil Twitter & Telegram. 
                    </RecompensesParagraph>
                    <RecompensesSubtitle>⚔️ Participer au raid :</RecompensesSubtitle>
                    <RecompensesParagraph>
                    1 - Participer au minimum à 50% des raids organisé par SENSEI depuis votre arrivé dans une guilde.<br /><br />

                    - Si vous rejoignez une guilde durant un cashprize en cours,<br /> 
                    il vous suffit de participer à 50% des raids organisé depuis votre arriver <br />
                    pour être éligible au cashprize. <br /><br />

                    2 - Suivre le compte Twitter de SENSEI et être abonné au <br />
                    channel Telegram de SENSEI.<br /><br />

                    - Pour chaque action effectué, veuilliez vous assurer de fournir les preuves & <br />
                    screens du raid effectué dans Sensei Labs en respectant les consignes énoncées <br />
                    sur la page RAID pour prouver votre participation et être eligible au cash prize.<br />
                    Prêter attention à bien faire apparaitre votre pseudo et photo de profil sur les <br />
                    screens enregistré dans Sensei Labs. <br /><br />
                    - Vérifier votre @telegram et @twitter renseigné à votre inscription pour vous <br />
                    assurer qu’ils soit en adéquation avec les screens enregistré dans votre espace <br />
                    personnelle, qui prouve votre participation pour chaqu’un des raids.<br />
                    </RecompensesParagraph>
                </RecompensePart>
            </RecompensesText>
            <RecompensesText>
                <RecompensePart>
                    <RecompensesTitle>Informations</RecompensesTitle>
                    <RecompensesSubtitle>Annonces des raids : </RecompensesSubtitle>
                    <RecompensesParagraph>
                        Soyez attentif ! Les règles sont annoncées sur notre Twitter et notre Telegram <br />
                        ainsi que sur notre page officiel RAID, 24H à l’avance.  ( Discord à venir )
                    </RecompensesParagraph>               
                    <RecompensesSubtitle>Securité :</RecompensesSubtitle>
                    <RecompensesParagraph>
                    Une fois le cashprize lancé, il est impossible de changer de guilde. <br /><br />

                    Une fois l’objectif atteint et après la distribution du cashprize effectué <br />
                    il vous seras possible de changer de guilde si vous le souhaitez pour le <br />
                    prochain cashprize.<br /><br />

                    Une guilde ne peux pas contenir plus de 50% du nombre de joueur total <br />
                    répartie entre toutes les guildes SENSEI. <br /><br />

                    Cette règle nous assure d’avoir une équité et de rester dans un esprit<br />
                    d’équipe. Les concours inter guilde ne sont pas là pour nous diviser et <br />
                    c’est une façon de se challengeant tous ensemble avec fun pour<br />
                    promouvoir SENSEI.<br />
                    </RecompensesParagraph>
                </RecompensePart>
                <SectionRecompenseImg>
                    <img className="hero--img-gaia" width="260" height="260" src={imgGaia} alt="gaia" />
                    <img className="hero--img-orion" width="260" height="260" src={imgOrion} alt="orion" />
                    <img className="hero--img-pegasus" width="260" height="260" src={imgPegasus} alt="pegasus" />
                </SectionRecompenseImg>
            </RecompensesText>
        </SectionRecompensesContainer>
    ) 

}

export default SectionRecompenses

