import withIntegrity from './withIntegrity.js'
import withSrc from './withSrc.js'
import withType from './withType.js'

/**
 * An object which represents a Collection+JSON script
 * @module collection/script
 * @property {null|string} integrity
 * @property {null|string} src
 * @property {undefined|null|string} type
 * @property {module:collection/withIntegrity} withIntegrity()
 * @property {module:collection/withSrc} withSrc()
 * @property {module:collection/withType} withType()
 */
export default {
  integrity: null,
  src: null,
  withIntegrity,
  withSrc,
  withType
}
