/**
 * @module withLinks
 * @param {module:link[]} links
 * @return {this|{links:module:link[]}}
 */
export default function withLinks (links) {
  return {
    ...this,
    links
  }
}
