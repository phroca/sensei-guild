/**
 * Layout component
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import "./layout.css"
import Footer from "./footer/footer"
import { MoralisProvider } from "react-moralis";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <MoralisProvider appId={process.env.GATSBY_MORALIS_API_APP_ID} serverUrl={process.env.GATSBY_MORALIS_API_SERVER_URL}>
      <Header/>
      <main>{children}</main>
      <Footer />
    </MoralisProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
