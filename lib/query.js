import withData from './withData.js'
import withHref from './withHref.js'
import withLinks from './withLinks.js'
import withPrompt from './withPrompt.js'
import withRel from './withRel.js'

/**
 * An object which represents a Collection+JSON query
 * @module collection/query
 * @property {undefined|null|module:collection/property[]} data
 * @property {null|string} href
 * @property {undefined|null|module:collection/link[]} links
 * @property {null|string} prompt
 * @property {null|string} rel
 * @property {module:collection/withData} withData()
 * @property {module:collection/withHref} withHref()
 * @property {module:collection/withPrompt} withPrompt()
 * @property {module:collection/withLinks} withLinks()
 * @property {module:collection/withRel} withRel()
 */
export default {
  href: null,
  prompt: null,
  rel: null,
  withData,
  withHref,
  withLinks,
  withPrompt,
  withRel
}
