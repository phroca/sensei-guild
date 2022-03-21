import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { getEllipsisTxt } from "../../helpers/formatters";
import { useMoralis } from "react-moralis";
import Modal from 'react-modal';
import { connectors } from "../../utils/config-connectors";
import { useState } from "react";

const BtnToAuthenticate = styled.button`
    outline: none;
    border: 2px solid #0AA4F3;
    width: 178px;
    height: 50px;
    background: transparent;
    font-family: "AirbnbCerealBlack";
    color: white;
    border-radius: 8px;
    text-transform: uppercase;
    cursor: pointer;
    @media (max-width: 640px) {
        width: 120px;
        height: 40px;
        font-size: 10px;
    }
    .lien-profil{
        font-size: 14px;
        grid-template-columns: auto;
        @media (max-width: 640px) {
            font-size: 10px;
        }
    }
`

const ConnectorContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
`

const ConnectorElement = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    justify-content: start;
    align-items: center;
    padding: 20px 5px;
    cursor: pointer;
    border: 1px dashed grey;
    border-radius: 5px;
    width: 250px;
`


const ImgConnector =styled.img`
    align-self: center;
    margin-bottom: 8px; 
`
const ConnectorModalContainer = styled.div`
    display: grid;
    grid-template-rows: 50px auto;
    justify-items: center;
    align-items: center;
    justify-content: center;

`
const ConnectorTitle = styled.h2`
    font-family: "AirbnbCerealBlack";
    color: white;
`

const ConnectorText = styled.span`
    font-family: "AirbnbCerealBlack";
    color: white;
`

const ConnectorStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
      },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#222222'
    },
  };

Modal.setAppElement('#___gatsby');

const Account = () => {
    const { authenticate, isAuthenticated, account, logout, user, auth } = useMoralis();
    const [isModalAuthVisible, setIsModalAuthVisible] = useState(false);

    const handleAuthenticate = async (connectorId) => {
        try {
            await authenticate({ provider: connectorId, signingMessage: "Authenticate to Sensei Guild"  });
          } catch (e) {
            console.error(e);
          }
    }

    if (!isAuthenticated) {
        return (
            <>
                <BtnToAuthenticate onClick={ () => setIsModalAuthVisible(true)}>
                    <p>Connecter</p>
                </BtnToAuthenticate>
                <Modal 
                    isOpen={isModalAuthVisible}
                    footer={null}
                    onRequestClose={() => setIsModalAuthVisible(false)}
                    style={ConnectorStyles}
                    
                >
                    <ConnectorModalContainer>
                        <ConnectorTitle>
                            Connecter
                        </ConnectorTitle>
                        <ConnectorContainer>
                            {connectors.map(({ title, icon, connectorId }, key) => (
                            <ConnectorElement
                                key={key}
                                onClick={() => handleAuthenticate(connectorId)}
                            >
                                <ImgConnector height="30" src={icon} alt={title} />
                                <ConnectorText>{title}</ConnectorText>
                            </ConnectorElement>
                            ))}
                        </ConnectorContainer>
                    </ConnectorModalContainer>
                </Modal>
            </>
        )
    }

    const handleLogout = () => {
        logout();
        setIsModalAuthVisible(false);
        if (window.location.pathname !== "/") window.location = "/";
    }

    return (
        <>
        <BtnToAuthenticate >
        <Link to="/profil" className="lien-profil">{getEllipsisTxt(user?.get("accounts")[0], 6)}</Link> 
        </BtnToAuthenticate>
        <BtnToAuthenticate onClick={ () => handleLogout()}>
            <p>se déconnecter</p> 
        </BtnToAuthenticate>
        </>
    )
}

export default Account