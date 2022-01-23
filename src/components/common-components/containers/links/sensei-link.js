import * as React from "react"
import { Link } from "gatsby"
import { useMoralis } from "react-moralis";


export const SenseiLink = ({to, children, className}) => {

    const { authenticate, isAuthenticated, account, logout } = useMoralis();

    if (!isAuthenticated || !account) {
        return(
            <Link to={to}><button className={className}>{children}</button></Link>
        )
    }

    return(
        <Link to="/profil"><button className={className}>Profil</button></Link>
    )

}
