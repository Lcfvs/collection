/**
 * Returns a copy of the attached instance, with the provided message
 * @module collection/withMessage
 * @param {string} message
 * @return {this|{message:string}}
 */
export default function withMessage (message) {
  return {
    ...this,
    message
  }
}
