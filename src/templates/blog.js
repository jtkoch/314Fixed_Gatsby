import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const blog = ({ data }) => {
  console.log("data,", data)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <React.Fragment>
      <Layout>
        <SEO title="Blog" />
        <div className="blog-post-container">
          <div className="blog-post">
            <h2 className="blog-post-title">{frontmatter.title}</h2>
            <Link className="button" to="/blog">
            ← Back
            </Link>
            <div className="blog-post-image">
              <Img fluid={frontmatter.image.childImageSharp.fluid} />
            </div>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          <Link className="button" to="/blog">
            ← Back
          </Link>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default blog

export const BlogRollQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
