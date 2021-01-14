#!/usr/bin/env node

const { generatePinset, defaultOpensslCommand, defaultPort } = require('../index')

const host = process.argv[2]
const port = process.argv[3] || defaultPort
const opensslCommand = process.argv[4] || defaultOpensslCommand

console.log(`generating pinset for ${host}:${port} with ${opensslCommand}`)

generatePinset(host, port, opensslCommand).then(console.log).catch(console.error)
