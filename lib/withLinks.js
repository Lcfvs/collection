/**
 * @module collection/withLinks
 * @param {module:collection/link[]} links
 * @return {this|{links:module:collection/link[]}}
 */
export default function withLinks (links) {
  return {
    ...this,
    links
  }
}
