/**
 * Returns a copy of the attached instance, with the provided value
 * @module collection/withValue
 * @param {string} value
 * @return {this|{value:string}}
 */
export default function withValue (value) {
  return {
    ...this,
    value
  }
}
