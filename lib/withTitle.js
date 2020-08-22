/**
 * Returns a copy of the attached instance, with the provided title
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
