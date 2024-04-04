// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var log1p = require('../../../../src/php/math/log1p.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/log1p.js (tested in test/languages/php/math/test-log1p.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 9.999999999999995e-16
    var result = log1p(1e-15)
    expect(result).to.deep.equal(expected)
    done()
  })
})
