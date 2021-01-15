import React from 'react'
import Link from 'gatsby-link'
import icon from '../images/314icon.png'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation() {
    return (
        <Container className="pl-auto nav-container"fluid={true} >
        <Navbar expand="lg">
            <Link to="/" ><img src={icon} alt="logo" /></Link>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbarResponsive" >
                <Nav className="nav-container">
                    <Link className="nav-link p-4" to="/">Home</Link>
                    <Link className="nav-link p-4" to="/Contact">Contact</Link>
                    <Link className="nav-link p-4" to="/Blog">Blog</Link>
                    <Link className="nav-link p-4" to="/merch">Merch</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
  )
}

export default Navigation