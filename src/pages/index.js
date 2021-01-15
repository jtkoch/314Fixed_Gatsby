import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import bikes from "../images/314pic2.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home-container">
      <img className="bikes" src={bikes} alt=""/>
      <div className="right-side">
        <h1>314 FIXED</h1>
        <h3>A Saint Louis Track Bike Collective</h3>
        <p>
          We put together group rides in Saint Louis for anyone that
          loves to ride fixed gear bikes. Come hang!
        </p>
        <button className="button">Contact Us!</button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
