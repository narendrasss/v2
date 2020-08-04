module.exports = {
  siteMetadata: {
    title: 'Narendra Syahrasyad',
    routes: [
      {
        name: 'work',
        path: '/',
      },
      {
        name: 'contact',
        path: 'mailto:n.syahrasyad.n@gmail.com',
      },
      {
        name: 'blog',
        path: 'blog.narendras.io',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              wrapperStyle: `margin: 2em -3em;`,
            },
          },
          `gatsby-remark-katex`,
        ],
      },
    },
  ],
}
