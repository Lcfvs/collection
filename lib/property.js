import withName from './withName.js'
import withPrompt from './withPrompt.js'
import withValue from './withValue.js'

/**
 * An object which represents a Collection+JSON property
 * @module collection/property
 * @property {null|string} name
 * @property {undefined|null|string} prompt
 * @property {undefined|null|boolean|number|string} value
 * @property {module:collection/withName} withName()
 * @property {module:collection/withPrompt} withPrompt()
 * @property {module:collection/withValue} withValue()
 */
export default {
  name: null,
  withName,
  withPrompt,
  withValue
}
