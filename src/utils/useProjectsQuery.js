import { useStaticQuery, graphql } from 'gatsby'

export function useProjectsQuery() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { order: ASC, fields: frontmatter___title }
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              tech
              github
              link
              color
              cover
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

export default useProjectsQuery
