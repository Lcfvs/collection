import withMessage from './withMessage.js'
import withName from './withName.js'

/**
 * An object which represents a Collection+JSON detail
 * @module collection/detail
 * @property {null|string} message
 * @property {null|string} name
 * @property {module:collection/withMessage} withMessage()
 * @property {module:collection/withName} withName()
 */
export default {
  message: null,
  name: null,
  withMessage,
  withName
}
