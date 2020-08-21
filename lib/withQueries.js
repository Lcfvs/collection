/**
 * @module withQueries
 * @param {module:query[]} queries
 * @return {this|{queries:module:query[]}}
 */
export default function withQueries (queries) {
  return {
    ...this,
    queries
  }
}
