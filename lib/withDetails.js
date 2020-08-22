/**
 * Returns a copy of the attached instance, with the provided details
 * @module collection/withDetails
 * @param {module:collection/detail[]} details
 * @return {this|{details:module:collection/detail[]}}
 */
export default function withDetails (details) {
  return {
    ...this,
    details
  }
}
