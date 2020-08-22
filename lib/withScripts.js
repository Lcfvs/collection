/**
 * Returns a copy of the attached instance, with the provided scripts
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
