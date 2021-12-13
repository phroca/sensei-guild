import * as React from "react"
import HeroCashprizeSection from "../components/cashprize-components/hero-cashprize-section/hero-cashprize-section"
import CashPrize from "../components/common-components/cashprize/cashprize"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Cashprize = () => (
  <Layout>
    <Seo title="Cashprize" />
    <HeroCashprizeSection />
    <CashPrize />
  </Layout>
)

export default Cashprize