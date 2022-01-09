import * as React from "react"
import styled from "styled-components"
import { getEllipsisTxt } from "../../helpers/formatters";
import { useMoralis } from "react-moralis";

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
`

const Account = () => {
    const { authenticate, isAuthenticated, account, logout } = useMoralis();

    const handleAuthenticate = async () => {
        try {
            await authenticate({ provider: "injected", signingMessage: "authenticate to Sensei Guild" });
          } catch (e) {
            console.error(e);
          }
    }

    if (!isAuthenticated || !account) {
        return (
            <BtnToAuthenticate onClick={ () => handleAuthenticate()}>
                <p>Connecter</p>
            </BtnToAuthenticate>
        )
    }

    return (
        <BtnToAuthenticate >
            <p>{getEllipsisTxt(account, 6)}</p>
        </BtnToAuthenticate>
    )
}

export default Account