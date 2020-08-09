import { useStaticQuery, graphql } from 'gatsby'

export function useMetaContent() {
  const data = useStaticQuery(graphql`
    query MetaContentQuery {
      about: markdownRemark(fields: { slug: { regex: "/about/" } }) {
        html
      }
      leetcode: markdownRemark(fields: { slug: { regex: "/leetcode/" } }) {
        html
      }
    }
  `)
  return data
}

export default useMetaContent
