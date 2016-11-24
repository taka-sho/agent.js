/* @flow */
import Core from './core'
import type { Options } from './types'

let agent

function create (id: string, options: Options, baseUrl: string): Core {
  agent = new Core(id, baseUrl, options || {}) // TODO cache
  return agent
}

function send (type: string, viewName: string): void {
  if (!agent) {
    return
  }
  agent.send(type, viewName)
}

module.exports = {
  create,
  send
}
