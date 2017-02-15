/* @flow */
import { describe, it } from 'mocha'
import { internet, random } from 'faker/locale/ja'
import assert from 'assert'

describe('requests', () => {
  const requests = require('../src/requests')

  function onlyJSDOM () {
    if (process.env.BROWSER === 'jsdom') {
      return it
    }
    return it.skip
  }

  onlyJSDOM()('doNotTrack', () => {
    navigator.doNotTrack = '1'
    assert(requests.enable() === false)
    navigator.doNotTrack = undefined
  })

  it('get', () => {
    assert(requests.get(internet.url(), []) === undefined)
  })

  it('obj2query', () => {
    function isASCII (str: string) {
      return /^[\x00-\x7F]*$/.test(str)
    }
    requests.obj2query({foo: random.word()}).forEach(q => {
      assert(isASCII(q))
    })
  })
})
