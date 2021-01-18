import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import logo from '../images/314logo.png'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home-container">
      <div className="hero-section">
        <img className="logo" src={logo} alt="" />
        <p>
          We put together group rides in Saint Louis for anyone that
          loves to ride fixed gear bikes. Come hang!
        </p>
        <a href="#" className="button">Contact Us</a>
      </div>

      <div className="mid">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="contact">
        <Contact />
      </div>

    </div>
  </Layout>
)

export default IndexPage
