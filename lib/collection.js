import withError from './withError.js'
import withHref from './withHref.js'
import withItems from './withItems.js'
import withLinks from './withLinks.js'
import withQueries from './withQueries.js'
import withScripts from './withScripts.js'
import withTemplate from './withTemplate.js'
import withVersion from './withVersion.js'

/**
 * @module collection/collection
 * @property {undefined|null|module:collection/error} error
 * @property {null|string} href
 * @property {undefined|null|module:collection/item[]} items
 * @property {undefined|null|module:collection/link[]} links
 * @property {undefined|null|module:collection/query[]} queries
 * @property {undefined|null|module:collection/script[]} scripts
 * @property {undefined|null|module:collection/template} template
 * @property {null|string} version
 */
export default {
  href: null,
  version: null,
  withError,
  withHref,
  withItems,
  withLinks,
  withQueries,
  withScripts,
  withTemplate,
  withVersion
}
