module.exports = {
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-shopify-poulo",
      options: {
        dirName: __dirname,
        navigation: {
          menu: [
            {
              type: "megamenu",
              displayName: "Shop",
            },
            {
              link: "/our-story",
              displayName: "Our Story",
            },
          ],
        },
        paymentMethods: [],
        shopifyOptions: {
          shopName: "graphql",
          accessToken: "dd4d4dc146542ba7763305d71d1b3d38",
        },
        activatePWA: false,
        colorMap: [
          { key: "PANTONE 16-4134 TCX", value: "rgb(83, 156, 204)" },
          { key: "PANTONE 2227 XGC", value: "rgb(91, 190, 196)" },
          { key: "Red", value: "rgb(132, 57, 79)" },
        ],
      },
    },
  ],
  siteMetadata: {
    title: `Gatsby Default Starter`,
    siteUrl: "https://weartriad.com",
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: "gatsby-plugin-compile-es6-packages",
      options: {
        modules: ["gatsby-theme-shopify-poulo"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
