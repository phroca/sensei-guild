import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.css"

import logoSensei from "../../images/logo-sensei.png"

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      hasScrolled: false,
      isMenuOpened: false
    }
    this.handleClickMenuClose = this.handleClickMenuClose.bind(this);
    this.handleClickMenuOpen = this.handleClickMenuOpen.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.scrollY;
    if(scrollTop > 50){
      this.setState({hasScrolled: true});
    } else {
      this.setState({hasScrolled: false});
    }
  }

  handleClickMenuOpen = () => {
    this.setState({isMenuOpened: true});
  }

  handleClickMenuClose = () => {
    this.setState({isMenuOpened: false});
  }
  render() {

    return (
      <div>
        <div className={this.state.hasScrolled ? 'header header-scrolled' : 'header'}>
            <div className="header-group">
              <Link to="/"><img src={logoSensei} alt="sensei-logo" /><span>SENSEI</span></Link>
              <div className="nav-group">
                <a className="header-button" href="#"><button>sensei temple</button></a>
                <a className="header-button" href="#"><button>sensei</button></a>
                <Link to="/"><button className="sensei-btn">buy sensei</button></Link>
                <button className="btn-lang">EN</button>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
