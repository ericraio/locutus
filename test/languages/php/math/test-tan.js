// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var tan = require('../../../../src/php/math/tan.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/tan.js (tested in test/languages/php/math/test-tan.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 54251849
    var result = Math.ceil(tan(8723321.4) * 10000000)
    expect(result).to.deep.equal(expected)
    done()
  })
})
