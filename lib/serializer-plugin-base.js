/**
 * This file is part of pigalle.plugins.serializers
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module serializer-plugin-base
 * @description A base to create serializers usable with the Pigalle framework.
 * @example
 *
 * const {SerializerPluginBase} = require('@pigalle/plugins.serializer')
 *
 * // A very simple JSON serializer for the Pigalle framework.
 *
 * class SimpleJsonSerializer extends SerializerPluginBase {
 *
 *   // Override inherited serialize method
 *   serialize(o) {
 *     return JSON.stringify(o)
 *   }
 *
 *   // Override inherited unserialize method
 *   unserialize(o) {
 *     return JSON.parse(o)
 *   }
 *
 * }
 *
 */

const {PluginEntity} = require('@pigalle/entities.plugin')
const {NotImplementedError} = require('@9fv.io/notimplemented-error')

/**
 *
 *
 * @type {string}
 */
const PIGALLE_TYPE = 'plugins.serializer'


/**
 * A base class to create serializers for the Pigalle framework.
 *
 * @class
 * @public
 */
class SerializerPluginBase extends PluginEntity {

  /**
   * Create a new instance of {SerializerPluginBase}.
   *
   * @param args - The arguments.
   * @constructor
   * @public
   */
  constructor (...args) {
    super(...args)
    this.setType(PIGALLE_TYPE)
  }

  /**
   * An unimplemented abstract function to serialize an object.
   *
   * @throws {NotImplementedError}
   */
  serialize() {
    throw new NotImplementedError('serialize() is not implemented')
  }

  /**
   * An unimplemented abstract function to unserialize a string or a buffer.
   *
   * @throws {NotImplementedError}
   */
  unserialize() {
    throw new NotImplementedError('unserialize() is not implemented')
  }

}

module.exports = {}
module.exports.SerializerPluginBase = SerializerPluginBase
