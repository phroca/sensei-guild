import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useMoralis } from "react-moralis";
import Modal from 'react-modal';
import { connectors } from "../../../../utils/config-connectors";
import { useState } from "react";

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

export const SenseiLink = ({to, children, className}) => {

    const { authenticate, isAuthenticated, account, logout, user } = useMoralis();
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
                <button onClick={ () => setIsModalAuthVisible(true)} className={className}>
                    <p>Connecter</p>
                </button>
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

    if(isAuthenticated && !user?.get("email")){
        return(
            <Link to={to}><button className={className}>{children}</button></Link>
        )
    }

    return(
        <Link to="/profil"><button className={className}>Profil</button></Link>
    )

}
