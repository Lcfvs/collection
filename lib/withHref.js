/**
 * @module withHref
 * @param {string} href
 * @return {this|{href:string}}
 */
export default function withHref (href) {
  return {
    ...this,
    href
  }
}
