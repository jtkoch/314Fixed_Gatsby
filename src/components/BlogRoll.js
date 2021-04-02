import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} className="cards" >
                <div className="card">
                  <Link className="post-title" to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                  <p>{post.frontmatter.date}</p>
                  <div className="thumbnail" >
                    <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                  </div>
                  <p className="excerpt">{post.excerpt}</p>
                  <Link className="keep-reading" to={post.frontmatter.path}>Keep Reading →</Link>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt(pruneLength: 60)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
                image {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)