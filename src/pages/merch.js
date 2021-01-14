import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Products from "../components/Products/Products"

const MerchPage = () => {
    return (
        <Layout>
            <SEO title="Merch" />
            <h1>This is the merch page</h1>
            <Products />
            <Link to="/">Go back to the home page</Link>
        </Layout>
    )    
}

export default MerchPage