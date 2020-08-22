/**
 * Returns a copy of the attached instance, with the provided render
 * @module collection/withRender
 * @param {string} render
 * @return {this|{render:string}}
 */
export default function withRender (render) {
  return {
    ...this,
    render
  }
}
