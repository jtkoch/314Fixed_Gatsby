import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <Link to="/merch/">Check out our merch</Link>
    </div>
  </Layout>
)

export default IndexPage
