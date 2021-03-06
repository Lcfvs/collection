/**
 * Returns a copy of the attached instance, with the provided template
 * @module collection/withTemplate
 * @param {module:collection/template} template
 * @return {this|{Templates:module:collection/template}}
 */
export default function withTemplate (template) {
  return {
    ...this,
    template
  }
}
