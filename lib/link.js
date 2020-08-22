import withHref from './withHref.js'
import withIntegrity from './withIntegrity.js'
import withPrompt from './withPrompt.js'
import withRel from './withRel.js'
import withRender from './withRender.js'
import withType from './withType.js'

/**
 * An object which represents a Collection+JSON link
 * @module collection/link
 * @property {null|string} href
 * @property {undefined|null|string} integrity
 * @property {undefined|null|string} prompt
 * @property {null|string} rel
 * @property {undefined|null|string} render
 * @property {undefined|null|string} type
 * @property {module:collection/withHref} withHref()
 * @property {module:collection/withIntegrity} withIntegrity()
 * @property {module:collection/withPrompt} withPrompt()
 * @property {module:collection/withRel} withRel()
 * @property {module:collection/withRender} withRender()
 * @property {module:collection/withType} withType()
 */
export default {
  href: null,
  rel: null,
  withHref,
  withIntegrity,
  withPrompt,
  withRel,
  withRender,
  withType
}
