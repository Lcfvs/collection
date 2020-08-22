/**
 * Returns a copy of the attached instance, with the provided error
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
