/**
 * Returns a copy of the attached instance, with the provided type
 * @module collection/withType
 * @param {string} type
 * @return {this|{type:string}}
 */
export default function withType (type) {
  return {
    ...this,
    type
  }
}
