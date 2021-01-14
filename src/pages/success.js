import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SuccessPage = () => (
    <Layout>
        <SEO title="Success Page" />
        <h1>Congrats, You bought something!</h1>
        <p>Thanks</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default SuccessPage