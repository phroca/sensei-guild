/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
 import React from "react"
 import { MoralisProvider } from "react-moralis";
 // You can delete this file if you're not using it
 export const wrapRootElement = ({ element }) => {
     return (
         <MoralisProvider appId={process.env.GATSBY_MORALIS_API_APP_ID} serverUrl={process.env.GATSBY_MORALIS_API_SERVER_URL}>
             {element}
         </MoralisProvider>
     )
 }