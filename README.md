# node-pinset

> Generate pinset for a remote server.

## Installation

`npm install pinset -g`

## Usage

`pinset 1.1.1.1`

```
generating pinset for 1.1.1.1:443 with openssl
od9obscoXQND56/DikypZrJkXGvbQV5Y61QGfcNitHo=
```

## Arguments

- 1st: [required] host
- 2nd: [optional] port
- 3rd: [optional] path to openssl

## Using programmatically

```js
const { generatePinset } = require('pinset')

generatePinset('1.1.1.1', 853).then(console.log)
// od9obscoXQND56/DikypZrJkXGvbQV5Y61QGfcNitHo=
```

## Requirements

Make sure `openssl` is installed and added to PATH.
