/**
 * Layout component
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useMoralis } from "react-moralis";
import Header from "./header/header"
import "./layout.css"
import Footer from "./footer/footer"


const Layout = ({ children }) => {

  return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
