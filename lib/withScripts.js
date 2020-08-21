/**
 * @module collection/withScripts
 * @param {module:collection/script[]} scripts
 * @return {this|{scripts:module:collection/script[]}}
 */
export default function withScripts (scripts) {
  return {
    ...this,
    scripts
  }
}
