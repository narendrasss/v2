import { useStaticQuery, graphql } from 'gatsby'

export function useProjectsQuery() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              client
              color
              cover
              description
              github
              path
              team
              tech
              title
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
