
import * as assert from 'assert'
import { RequestLogger } from 'testcafe'
import { deployBaseUrl, intRegex } from '../../testcafe-conf'
import { query } from '../test-util'

const intLogger = RequestLogger(intRegex)

const l = `${deployBaseUrl}/optimizely-x/`

fixture('optimizely-x event').page(l)

test.requestHooks(intLogger)('multiple test events', async (t) => {
  await t.wait(5000)
  assert.ok(intLogger.requests.length === 2)
  for (let i = 0; i < intLogger.requests.length; i++) {
    const intRecord = intLogger.requests[i]
    assert.equal(intRecord.request.method, 'get')
    const event = query(intRecord)['e'].split(',')
    assert.equal(event[0], `${i + 1}`)
    assert.equal(event[1], 'optimizely')
    assert.ok(event[2])
    assert.ok(event[3])
  }
})
