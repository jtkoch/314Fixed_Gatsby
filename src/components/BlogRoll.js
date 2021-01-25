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
            <div key={post.id}>
                <h3>
                    <p>
                    <Link to={post.frontmatter.path}>
                        {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span>{post.frontmatter.date}</span>
                    </p>
                </h3>
                    <Img className="thumbnail" fixed={post.frontmatter.image.childImageSharp.fixed} />
                    <p>
                        {post.excerpt}
                        <br />
                        <Link className="button" to={post.frontmatter.path}>
                        Keep Reading →
                        </Link>
                    </p>
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
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
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
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)