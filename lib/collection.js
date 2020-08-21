import withError from './withError.js'
import withHref from './withHref.js'
import withItems from './withItems.js'
import withLinks from './withLinks.js'
import withQueries from './withQueries.js'
import withVersion from './withVersion.js'
import withScripts from './withScripts.js'

/**
 * @module collection
 * @property {undefined|null|module:error} error
 * @property {null|string} href
 * @property {undefined|null|module:item[]} items
 * @property {undefined|null|module:link[]} links
 * @property {undefined|null|module:query[]} queries
 * @property {undefined|null|module:script[]} scripts
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
  withVersion
}
