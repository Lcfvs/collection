/**
 * Returns a copy of the attached instance, with the provided href
 * @module collection/withHref
 * @param {string} href
 * @return {this|{href:string}}
 */
export default function withHref (href) {
  return {
    ...this,
    href
  }
}
