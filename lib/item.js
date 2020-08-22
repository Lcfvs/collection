import withData from './withData.js'
import withHref from './withHref.js'
import withLinks from './withLinks.js'

/**
 * An object which represents a Collection+JSON item
 * @module collection/item
 * @property {null|module:collection/property[]} data
 * @property {null|string} href
 * @property {undefined|null|module:collection/link[]} links
 * @property {module:collection/withData} withData()
 * @property {module:collection/withHref} withHref()
 * @property {module:collection/withLinks} withLinks()
 */
export default {
  data: null,
  href: null,
  withData,
  withHref,
  withLinks
}
