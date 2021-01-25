import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Img from "gatsby-image"

const blog = ({ data }) => {
  console.log("data,", data)
    return (
      <React.Fragment>
        <Layout>
            <SEO title="Blog" />
            <div className="blog-page-container">
                <h1 className="blog-title">Latest Posts</h1>
                <div>
                  <h2>{data.markdownRemark.frontmatter.title}</h2>
                  <Img
                    fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed}
                  />
                </div>
            </div>
        </Layout>
      </React.Fragment>
    )
}

export default blog

export const BlogPostTemplateQuery = graphql`
  query BlogPostTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        image {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`