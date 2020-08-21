/**
 * @module collection/withPrompt
 * @param {string} prompt
 * @return {this|{prompt:string}}
 */
export default function withPrompt (prompt) {
  return {
    ...this,
    prompt
  }
}
