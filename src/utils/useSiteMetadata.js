import { useStaticQuery, graphql } from 'gatsby'

export function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          introText
          routes {
            name
            path
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}

export default useSiteMetadata
