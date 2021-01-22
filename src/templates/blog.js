// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"

// export default function Template({
//   data, // this prop will be injected by the GraphQL query below.
// }) {
//   const { markdownRemark } = data // data.markdownRemark holds your post data
//   const { frontmatter, html } = markdownRemark
//   return (
//     <Layout>
//         <div className="blog-post-container">
//         <div className="blog-post">
//             <h1>{frontmatter.title}</h1>
//             <h2>{frontmatter.date}</h2>
//             <div
//             className="blog-post-content"
//             dangerouslySetInnerHTML={{ __html: html }}
//             />
//         </div>
//         </div>
//     </Layout>
//   )
// }
// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `

import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const Blog = ({ data }) => {
  console.log("data,", data)
  return (
    <Layout>
      <div className="blog-post-container">
        <h2 className="blog-post">{data.markdownRemark.frontmatter.title}</h2>
        <Img
          fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed}
        />
      </div>
    </Layout>
  )
}

export default Blog

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