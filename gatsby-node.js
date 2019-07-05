const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@elements': path.resolve(__dirname, 'src/elements'),
        '@animations': path.resolve(__dirname, 'src/animations'),
      },
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      posts: allMarkdownRemark(
        filter: {
          fields: { slug: { regex: "/posts/" } }
          frontmatter: { private: { eq: false } }
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      algs: allMarkdownRemark(
        filter: { fields: { slug: { regex: "//algorithms//" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.posts.edges.forEach(({ node }) => {
      const { slug } = node.fields
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/BlogPost.jsx`),
        context: { slug },
      })
    })

    result.data.algs.edges.forEach(({ node }) => {
      const { slug } = node.fields
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/Algorithm.jsx`),
        context: { slug },
      })
    })
  })
}
