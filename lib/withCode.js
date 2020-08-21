/**
 * @module withCode
 * @param {string} code
 * @return {this|{code:string}}
 */
export default function withCode (code) {
  return {
    ...this,
    code
  }
}
