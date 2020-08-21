/**
 * @module collection/withError
 * @param {module:collection/error} error
 * @return {this|{error:module:collection/error}}
 */
export default function withError (error) {
  return {
    ...this,
    error
  }
}
