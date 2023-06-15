const config = require('./config.json')

module.exports = {
  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "777",     // Any network (default: none)
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.20",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {
        optimizer: config.compilers.optimizer,
        evmVersion: config.compilers.evmVersion,
      },
    }
  }
}
