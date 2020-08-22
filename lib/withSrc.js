/**
 * Returns a copy of the attached instance, with the provided src
 * @module collection/withSrc
 * @param {string} src
 * @return {this|{src:string}}
 */
export default function withSrc (src) {
  return {
    ...this,
    src
  }
}
