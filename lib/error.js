import withCode from './withCode.js'
import withDetails from './withDetails.js'
import withMessage from './withMessage.js'
import withTitle from './withTitle.js'

/**
 * An object which represents a Collection+JSON error
 * @module collection/error
 * @property {null|string} code
 * @property {undefined|null|module:collection/detail[]} details
 * @property {null|string} message
 * @property {null|string} title
 * @property {module:collection/withCode} withCode()
 * @property {module:collection/withDetails} withDetails()
 * @property {module:collection/withMessage} withMessage()
 * @property {module:collection/withTitle} withTitle()
 */
export default {
  code: null,
  message: null,
  title: null,
  withCode,
  withDetails,
  withMessage,
  withTitle
}
