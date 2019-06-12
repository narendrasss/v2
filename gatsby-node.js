const path = require('path')

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

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const template = path.resolve(`src/templates/ProjectTemplate.jsx`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    return result.data.allMarkdownRemark.edges.map(({ node }) =>
      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {},
      })
    )
  })
}
