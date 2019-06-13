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
