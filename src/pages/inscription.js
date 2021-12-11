import * as React from "react"
import CashPrize from "../components/common-components/cashprize/cashprize"
import HeroInscription from "../components/inscription-components/hero-inscription/hero-inscription"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Inscription = () => (
  <Layout>
    <Seo title="Inscription" />
    <HeroInscription />
    <CashPrize />
  </Layout>
)

export default Inscription
