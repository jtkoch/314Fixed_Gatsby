require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `314Fixed`,
    description: `A Saint Louis Based Track Bike Collective`,
    author: `@JensenKoch`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/blog`,
      },
    },
    {      
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-plugin-netlify-cms-paths`,
            options: {
              cmsConfig: `/static/admin/config.yml`,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-stripe`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price"], 
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
