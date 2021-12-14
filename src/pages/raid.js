import * as React from "react"
import CashPrize from "../components/common-components/cashprize/cashprize"

import Layout from "../components/layout"
import HeroRaidSection from "../components/raid-components/hero-raid-section/hero-raid-section"
import Seo from "../components/seo"

const Raid = () => (
  <Layout>
    <Seo title="Raid" />
    <HeroRaidSection />
    <CashPrize />
  </Layout>
)

export default Raid