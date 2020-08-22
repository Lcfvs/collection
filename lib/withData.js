/**
 * Returns a copy of the attached instance, with the provided data
 * @module collection/withData
 * @param {module:collection/property[]} data
 * @return {this|{data:module:collection/property[]}}
 */
export default function withData (data) {
  return {
    ...this,
    data
  }
}
