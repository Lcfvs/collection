/**
 * @module collection/withIntegrity
 * @param {string} integrity
 * @return {this|{integrity:string}}
 */
export default function withIntegrity (integrity) {
  return {
    ...this,
    integrity
  }
}
