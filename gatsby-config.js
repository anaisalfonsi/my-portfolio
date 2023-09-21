module.exports = {
  siteMetadata: {
    title: `my-portfolio`,
    siteUrl: `https://www.anais-alfonsi.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-Q1YSE9G6NS",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/logos/logo.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Red Rose`,
          `montserrat`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
