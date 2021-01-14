const { spawnSync } = require('child_process')

const isWindows = process.platform === 'win32'
const shell = isWindows ? process.env.COMSPEC || 'cmd.exe' : process.env.SHELL || '/bin/bash'
const shellArg = isWindows ? '/C' : '-c'
const devNul = isWindows ? 'NUL' : '/dev/null'

const defaultOpensslCommand = 'openssl'
const defaultPort = 443

const generatePinset = async (host, port = defaultPort, opensslCommand = defaultOpensslCommand) => {
    const command = `echo | ${opensslCommand} s_client -connect ${host}:${port} 2>${devNul} | ${opensslCommand} x509 -pubkey -noout | ${opensslCommand} pkey -pubin -outform der | ${opensslCommand} dgst -sha256 -binary | ${opensslCommand} enc -base64`
    const p = spawnSync(shell, [shellArg, command])
    if (p.stderr.length) {
        throw new Error(p.stderr.toString())
    }
    return p.stdout.toString().trim()
}

module.exports = { generatePinset, defaultPort, defaultOpensslCommand }
