/**
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
