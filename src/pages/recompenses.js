import * as React from "react"
import CashPrize from "../components/common-components/cashprize/cashprize"

import Layout from "../components/layout"
import SectionRecompenses from "../components/recompenses-components/section-recompense/section-recompenses"
import Seo from "../components/seo"

const Recompenses = () => (
  <Layout>
    <Seo title="Récompenses" />
    <SectionRecompenses />
    <CashPrize />
  </Layout>
)

export default Recompenses
