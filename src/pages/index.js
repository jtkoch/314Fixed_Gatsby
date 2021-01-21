import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from '../components/contact'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import logo from '../images/314logo.png'


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
        <a href="/contactPage" className="button">Contact Us</a>
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

      <div className="bottom">
        <div className="contact">
          <Contact />
        </div>
        <div className="social">
          <h3>Links</h3>
          <p>
            Check our instagram story for updates <br></br>
            on upcoming group rides
          </p>
          <a href="https://www.instagram.com/314fixed/" target=" _blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faInstagram} aria-label="instagram"></FontAwesomeIcon></a>
          <a href="https://www.youtube.com/channel/UCy6wfAZwP54rcZ6ToFprHGA" target=" _blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faYoutube} aria-label="youtube"></FontAwesomeIcon></a>
        </div>
      </div>

    </div>
  </Layout>
)

export default IndexPage
