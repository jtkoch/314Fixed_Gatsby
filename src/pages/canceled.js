import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const CanceledPage = () => (
    <Layout>
        <SEO title="Canceled Page" />
        <h1>Your order has been canceled</h1>
        <p>You have not been charged</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default CanceledPage