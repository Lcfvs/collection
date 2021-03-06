/**
 * Returns a copy of the attached instance, with the provided code
 * @module collection/withCode
 * @param {string} code
 * @return {this|{code:string}}
 */
export default function withCode (code) {
  return {
    ...this,
    code
  }
}
