import * as React from "react"
import CashPrize from "../components/common-components/cashprize/cashprize"

import Layout from "../components/layout"
import HeroProfilSection from "../components/profil-components/hero-profil-section/hero-profil-section"
import ProfilParticipation from "../components/profil-components/profil-participation/profil-participation"
import ProfilSenseiLabs from "../components/profil-components/profil-sensei-labs/profil-sensei-labs"
import Seo from "../components/seo"

const Profil = () => (
  <Layout>
    <Seo title="Profil" />
    <HeroProfilSection />
    <ProfilSenseiLabs />
    <ProfilParticipation />
    <CashPrize />
  </Layout>
)

export default Profil