/**
 * @module withDetails
 * @param {module:detail[]} details
 * @return {this|{details:module:detail[]}}
 */
export default function withDetails (details) {
  return {
    ...this,
    details
  }
}
