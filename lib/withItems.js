/**
 * @module withItems
 * @param {module:item[]} items
 * @return {this|{items:module:item[]}}
 */
export default function withItems (items) {
  return {
    ...this,
    items
  }
}
