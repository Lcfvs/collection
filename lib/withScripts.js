/**
 * @module withScripts
 * @param {module:script[]} scripts
 * @return {this|{scripts:module:script[]}}
 */
export default function withScripts (scripts) {
  return {
    ...this,
    scripts
  }
}
