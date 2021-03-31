import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Carousel } from 'react-bootstrap'

const gallery = ({data}) => {
  return (
    <>
      <Layout>
        <SEO title="Gallery" />
        <div className="gallery-container">
          <h1 className="gallery-title">Gallery</h1>
          <Container>
            <Carousel fade>
              {data.ridePhotos.edges.map(image => (
                <Carousel.Item key={image.node.id} interval={3000}>
                  <Img    
                    fluid={image.node.childImageSharp.fluid}
                    alt={image.node.base.split('-').join(' ').split('.')[0]}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        </div>
      </Layout>
    </>
  )
}

export default gallery

export const pageQuery = graphql `
  query {
    ridePhotos: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)/"}, relativeDirectory: {eq: "gallery"}}, sort: {fields: base, order: ASC}) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 800, fit: COVER, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`