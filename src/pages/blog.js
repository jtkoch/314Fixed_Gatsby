import React from 'react'
import Blog from "../templates/blog"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
            <SEO title="Blog" />
            <div className="blog-page-container">
                <h1 className="blog-title">Latest Posts</h1>
                <section>
                    <div className="content">
                        <Blog />
                    </div>
                </section>
            </div>
        </Layout>
      </React.Fragment>
    )
  }
}