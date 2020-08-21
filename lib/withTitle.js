/**
 * @module collection/withTitle
 * @param {string} title
 * @return {this|{title:string}}
 */
export default function withTitle (title) {
  return {
    ...this,
    title
  }
}
