import * as React from "react"
import { Link } from "gatsby"
import "./header.css"
import { useState, useEffect } from "react"
import logoSensei from "../../images/logo-sensei.png"
import Account from "../account-component/account"

const Header = () => {
   const [hasScrolled, setHasScrolled] = useState(false);
   //const [isMenuOpened, setMenuOpened] = useState(false);
   
  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);
    /* Cleanup function */
    return()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  

  const handleScroll = (event) => {
    const scrollTop = window.scrollY;
    if(scrollTop > 50){
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }

  /*const handleClickMenuOpen = () => {
    setMenuOpened(true);
  }

  const handleClickMenuClose = () => {
    setMenuOpened(false);
  }*/

    return (
      <div>
        <div className={hasScrolled ? 'header header-scrolled' : 'header'}>
            <div className="header-group">
              <Link to="/"><img src={logoSensei} alt="sensei-logo" /><span>SENSEI</span></Link>
              <div className="nav-group">
                <Account />
                {/* <button className="btn-lang">EN</button> */}
              </div>
            </div>
        </div>
      </div>
    )
  
}

export default Header
