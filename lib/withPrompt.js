/**
 * Returns a copy of the attached instance, with the provided prompt
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
