export { useProjectsQuery } from './useProjectsQuery'
export { useSiteMetadata } from './useSiteMetadata'

export function getResponsiveSize({
  startSize,
  endSize,
  startWidth,
  endWidth,
}) {
  return `calc(${startSize}px + ${endSize -
    startSize} * ((100vw - ${startWidth}px) / ${endWidth - startWidth}))`
}
