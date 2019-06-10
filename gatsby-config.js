module.exports = {
  siteMetadata: {
    title: 'Narendra Syahrasyad',
    introText: `I'm Narendra, an apsiring software developer and business and computer science student @ UBC.`,
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
