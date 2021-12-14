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

const SectionConseil = () => {

    
    return (
        <SectionConseilContainer>
            <SectionConseilTitle>
            CONSEILS & MESSAGES TYPE :
            </SectionConseilTitle>
            <SectionConseilContent>
                <Text>
                    MISSION DU JOUR : 🛰 <br />
                    CIBLE : CoinGecko 🎯<br />
                    https://www.coingecko.com/en/coins/sensei<br />
                    Afin de donner davantage de visibilité à $SENSEI sur Coingecko :<br />
                    1️⃣ Crée un compte sur CoinGecko puis clique sur l'étoile ⭐️ pour ajouter SENSEI à tes favoris, ce qui booste notre classement. 🤝<br />
                    2️⃣  Vote Good pour soutenir le score de SENSEI. 🤝<br />
                    Ne sous estime pas la force de ton action, c’est important pour le projet et ça peut nous faire gagner beaucoup de visibilité.<br />
                    #WEARESENSEI ⛩
                </Text>
                <Text>
                    🚨 MISSION DU JOUR : 🛰<br />
                    CIBLE : BlockFolio/FTX 🎯<br />
                    MISSION : Voter sur BlockFolio/FTX 👀<br />
                    C'est facile et ça prend 15 secondes alors si vous voulez voir le token $SENSEI listé sur BlockFolio/FTX vous pouvez cliquer sur le lien, vous connecter simplement et voter. 🚀<br />
                    ➡️ https://blockfolio.canny.io/coin-requests/p/sensei-senseiprotocolcom 💎<br />
                    BONUS : Ajouter un commentaire positif avec le hashtag #WEARESENSEI<br />
                    OBJECTIF : 1K VOTES 🤝🎯<br />
                    Après avoir voté vous pouvez cliquer sur la phrase juste en dessous pour montrer votre soutien. 👩‍🚀🌌<br />
                    #WEARESENSEI ⛩
                </Text>
            </SectionConseilContent>
            <SectionConseilContent>
                <Text>
                    MISSION DU JOUR : 🛰<br />
                    CIBLE : CoinGecko 🎯<br />
                    ➡️ https://www.coingecko.com/en/coins/sensei<br />
                    🛰  Afin de donner davantage de visibilité à $SENSEI sur Coingecko :<br />
                    1️⃣ Crée un compte sur CoinGecko puis clique sur l'étoile ⭐️ pour ajouter SENSEI à tes favoris, ce qui booste notre classement. 🤝<br />
                    2️⃣  Vote Good pour soutenir le score de SENSEI. 🤝<br />
                    Ne sous estime pas la force de ton action, c’est important pour le projet et ça peut nous faire gagner beaucoup de visibilité.<br />
                    #WEARESENSEI ⛩
                </Text>
                <Text>
                    🚨 MISSION DU JOUR : 🛰<br />
                    CIBLE : BlockFolio/FTX 🎯<br />
                    MISSION : Voter sur BlockFolio/FTX 👀<br />
                    C'est facile et ça prend 15 secondes alors si vous voulez voir le token $SENSEI listé sur BlockFolio/FTX vous pouvez cliquer sur le lien, vous connecter simplement et voter. 🚀<br />
                    ➡️ https://blockfolio.canny.io/coin-requests/p/sensei-senseiprotocolcom 💎<br />
                    BONUS : Ajouter un commentaire positif avec le hashtag #WEARESENSEI<br />
                    OBJECTIF : 1K VOTES 🤝🎯<br />
                    Après avoir voté vous pouvez cliquer sur la phrase juste en dessous pour montrer votre soutien. 👩‍🚀🌌<br />
                    #WEARESENSEI ⛩
                </Text>
            </SectionConseilContent>
        </SectionConseilContainer>
    ) 


}

export default SectionConseil