/**
 * Returns a copy of the attached instance, with the provided version
 * @module collection/withVersion
 * @type {function}
 * @param {string} version
 * @return {this|{version:string}}
 */
export default function withVersion (version) {
  return {
    ...this,
    version
  }
}
