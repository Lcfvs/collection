/**
 * Returns a copy of the attached instance, with the provided rel
 * @module collection/withRel
 * @param {string} rel
 * @return {this|{rel:string}}
 */
export default function withRel (rel) {
  return {
    ...this,
    rel
  }
}
