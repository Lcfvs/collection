/**
 * Returns a copy of the attached instance, with the provided links
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
