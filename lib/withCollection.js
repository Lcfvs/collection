/**
 * Returns a copy of the attached instance, with the provided collection
 * @module collection/withCollection
 * @param {module:collection/collection} collection
 * @return {this|{collection:module:collection/collection}}
 */
export default function withCollection (collection) {
  return {
    ...this,
    collection
  }
}
