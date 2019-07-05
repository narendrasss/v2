export { useProjectsQuery } from './useProjectsQuery'
export { useSiteMetadata } from './useSiteMetadata'
export { useBlogPosts } from './useBlogPosts'
export { useAlgorithmsQuery } from './useAlgorithmsQuery'
export { default as topics } from './topics'

export function getResponsiveSize({
  startSize,
  endSize,
  startWidth,
  endWidth,
}) {
  return `calc(${startSize}px + ${endSize -
    startSize} * ((100vw - ${startWidth}px) / ${endWidth - startWidth}))`
}
