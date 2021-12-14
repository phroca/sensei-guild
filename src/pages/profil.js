import * as React from "react"
import CashPrize from "../components/common-components/cashprize/cashprize"

import Layout from "../components/layout"
import HeroProfilSection from "../components/profil-components/hero-profil-section/hero-profil-section"
import Seo from "../components/seo"

const Profil = () => (
  <Layout>
    <Seo title="Profil" />
    <HeroProfilSection />
    <CashPrize />
  </Layout>
)

export default Profil