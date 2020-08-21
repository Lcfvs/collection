/**
 * @module withVersion
 * @param {string} version
 * @return {this|{version:string}}
 */
export default function withVersion (version) {
  return {
    ...this,
    version
  }
}
