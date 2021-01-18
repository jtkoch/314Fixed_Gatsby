import React from 'react'
import { Link } from "gatsby"

function Footer() {
    return (
        <div className="footer-container">
            <ul>
                <li><Link style={{color:"#ADBFEF"}} to="/">Home</Link></li>
                <li><Link style={{color:"#ADBFEF"}} to="/Blog">Blog</Link></li>
                <li><Link style={{color:"#ADBFEF"}} to="/merch">Merch</Link></li>
                <li><Link style={{color:"#ADBFEF"}} to="/contactPage">Contact</Link></li>
            </ul>

            <p>Website designed and developed by www.jensenkoch.com</p>
        </div>
    )
}

export default Footer