/**
 * @module withCollection
 * @param {module:collection} collection
 * @return {this|{collection:module:collection}}
 */
export default function withCollection (collection) {
  return {
    ...this,
    collection
  }
}
