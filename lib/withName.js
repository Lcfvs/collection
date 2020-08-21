/**
 * @module collection/withName
 * @param {string} name
 * @return {this|{name:string}}
 */
export default function withName (name) {
  return {
    ...this,
    name
  }
}
