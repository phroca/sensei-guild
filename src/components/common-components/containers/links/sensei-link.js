import * as React from "react"
import { Link } from "gatsby"
import { useMoralis } from "react-moralis";


export const SenseiLink = ({to, children, className}) => {

    const { authenticate, isAuthenticated, account, logout, user } = useMoralis();

    const handleAuthenticate = async () => {
        try {
            await authenticate({ provider: "injected", signingMessage: "Authenticate to Sensei Guild" });
          } catch (e) {
            console.error(e);
          }
    }

    if (!isAuthenticated) {
        return(
            <button onClick={ () => handleAuthenticate()} className={className}>Se Connecter</button>
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
