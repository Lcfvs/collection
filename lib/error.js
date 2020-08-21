import withCode from './withCode.js'
import withDetails from './withDetails.js'
import withMessage from './withMessage.js'
import withTitle from './withTitle.js'

/**
 * @module collection/error
 * @property {null|string} code
 * @property {undefined|null|module:collection/detail[]} details
 * @property {null|string} message
 * @property {null|string} title
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
