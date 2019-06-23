import { useStaticQuery, graphql } from 'gatsby'

export function useBlogPosts() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            frontmatter {
              date
              title
              tagline
            }
            fields {
              slug
            }
            html
            timeToRead
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges.map(edge => edge.node)
}

export default useBlogPosts
