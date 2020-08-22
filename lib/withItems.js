/**
 * Returns a copy of the attached instance, with the provided items
 * @module collection/withItems
 * @param {module:collection/item[]} items
 * @return {this|{items:module:collection/item[]}}
 */
export default function withItems (items) {
  return {
    ...this,
    items
  }
}
