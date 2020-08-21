/**
 * @module withError
 * @param {module:error} error
 * @return {this|{error:module:error}}
 */
export default function withError (error) {
  return {
    ...this,
    error
  }
}
