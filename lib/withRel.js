/**
 * @module withRel
 * @param {string} rel
 * @return {this|{rel:string}}
 */
export default function withRel (rel) {
  return {
    ...this,
    rel
  }
}
