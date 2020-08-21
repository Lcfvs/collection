/**
 * @module collection/withQueries
 * @param {module:collection/query[]} queries
 * @return {this|{queries:module:collection/query[]}}
 */
export default function withQueries (queries) {
  return {
    ...this,
    queries
  }
}
