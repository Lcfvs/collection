/**
 * @module withMessage
 * @param {string} message
 * @return {this|{message:string}}
 */
export default function withMessage (message) {
  return {
    ...this,
    message
  }
}
