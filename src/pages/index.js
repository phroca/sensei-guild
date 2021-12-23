import * as React from "react"

import '../font/AirbnbCerealBlack.ttf';
import '../font/AirbnbCerealBook.ttf';
import '../font/AirbnbCerealMedium.ttf';

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroGuilde from "../components/guilde-components/hero-guilde/hero-guilde"
import SectionChoixGuilde from "../components/guilde-components/section-choix-guilde/section-choix-guilde"
import CashPrize from "../components/common-components/cashprize/cashprize";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroGuilde />
    <SectionChoixGuilde />
    <CashPrize />
  </Layout>
)

export default IndexPage
