require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note spike pull gesture globe fringe gas'; 
let testAccounts = [
"0x7616e4ac83a0b0c2d753b22edbdc8bb69e6e1320d4fc3e0aa052cc66695b448e",
"0xccd7994dcd603f5eeeb658b14e3c5344d0e4aea3bdac803c979d8578046f7f7b",
"0xefa0f97714aa9cd8d88a6b9e3920e0e8bf15f6db15f43fdafd7f28d7f2d40521",
"0xc7880c7a4b1e01ab61e5986e64d930267b8d1c7e3ec763f53675552b4cf96f4c",
"0xab8dba33a2520fbfe7cb1cd44ceaf4311bdd3a98a242eb6698ac8d1f6abe846e",
"0xa17c788b7e12ec745edf04e328f6803bf6be215faf37a56cd7f26704ba460f01",
"0xe7bfd9b980b925aac3883e3efe6a5059b7d6cd83a1ecb4fc51fafe2703740ce7",
"0xc898281907628ade98fa9e5c27635303b64e78b4edd1f5d5c55edeb714f7bc1c",
"0xf7b71e46f81eb4d526585bdfea351e520c3874ce2563326398d88b823197f22a",
"0x6018c3639c805bd49a9a9e68e6b2aa7445e81355a4005f5f2a11bb69cd89124a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


