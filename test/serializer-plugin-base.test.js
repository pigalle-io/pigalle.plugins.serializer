/**
 * This file is part of pigalle.plugins.serializers
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {NotImplementedError} = require('@9fv.io/notimplemented-error')
const {SerializerPluginBase} = require('../lib/serializer-plugin-base')

describe('Class {SerializerPluginBase}', () => {
  it('should be a function', () => {
    (SerializerPluginBase).should.be.a.Function()
  })
})

describe('Create a instance of {SerializerPluginBase} using <new> keyword', () => {
  it('should be an object', () => {
    (new SerializerPluginBase()).should.be.an.Object()
  })

  it('should be an instance of {SerializerPluginBase}', () => {
    (new SerializerPluginBase()).should.be.an.instanceOf(SerializerPluginBase)
  })

  it('should have an internal property named <type>', () => {
    (new SerializerPluginBase().internals().get('type')).should.be.not.null()
  })

})


describe('Call ', () => {
  it('<.serialize> method should throw a {NotImplementedError}', () => {
    (() => SerializerPluginBase.factory().serialize()).should.throw(NotImplementedError)
  })

  it('<.unserialize> method should throw a {NotImplementedError}', () => {
    (() => SerializerPluginBase.factory().unserialize()).should.throw(NotImplementedError)
  })
})
