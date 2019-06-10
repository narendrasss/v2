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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
