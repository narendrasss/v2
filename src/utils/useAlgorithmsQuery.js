import { useStaticQuery, graphql } from 'gatsby'

export function useAlgorithmsQuery() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "//algorithms//" } } }
        sort: { order: ASC, fields: frontmatter___number }
      ) {
        edges {
          node {
            id
            frontmatter {
              number
              title
              bigo
              runtime
              memory
            }
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges.map(edge => edge.node)
}

export default useAlgorithmsQuery
