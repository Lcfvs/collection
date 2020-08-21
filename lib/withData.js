/**
 * @module withData
 * @param {module:property[]} data
 * @return {this|{data:module:property[]}}
 */
export default function withData ([...data]) {
  return {
    ...this,
    data
  }
}
