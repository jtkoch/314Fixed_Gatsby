import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import icon from '../images/314Icon.png'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = () => (
  <Container className="pl-auto nav-container" fluid={true}>
    <Navbar expand="lg">
        <Link to="/" ><img className="icon" src={icon} alt="logo" /></Link>
        <Navbar.Toggle className="border-0 navbar-dark" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-collapse">
            <Nav className="ml-auto navbar-container">
                <Link style={{color:"#ADBFEF"}} className="nav-link ml-4 mr-4" to="/">Home</Link>
                <Link style={{color:"#ADBFEF"}} className="nav-link ml-4 mr-4" to="/blog">Blog</Link>
                {/* <Link style={{color:"#ADBFEF"}} className="nav-link ml-4 mr-4" to="/merch">Merch</Link> */}
                <Link style={{color:"#ADBFEF"}} className="nav-link ml-4 mr-4" to="/gallery">Gallery</Link>
                <Link style={{color:"#ADBFEF"}} className="nav-link ml-4 mr-4" to="/contactPage">Contact</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header