require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth spike essay inflict clog surge giggle'; 
let testAccounts = [
"0x3a1b7b482b3ab61fed119551e616264f2cdbe122de9eb7058edc2f8f4434a3b1",
"0xec72f7a93f36119bab15db2979ad8dbb47af426f4c072b7b53af8a22cef5951a",
"0xf21923ca68ac22e9fcbb00bbc020e8f60d8349979d6feefe2fbed0bdeb5fd4a8",
"0x6d13a5f529290499a2c5a71fd1013d06f87e044a6f1efb079954363cdb1a1b1f",
"0xf7acfce958ec7e0a88023eebefb84aab9dbfa257359fa2418dcbdb84b2816d95",
"0x7a09561ebd212319d274a7a65bad6e50ba20f5b93fac3afd1d936d438195853f",
"0x5aedf5d52222fc9c3905657f1405fc35ad36d3c4e58dc33e1f4d775ebd408b0a",
"0x92a12fb8d1d09ea962eb5680ed1a1e7a15e5cd3b2bc0d329bf501d598a8a813c",
"0xc5b433df4ab0d087ae656b21f00504d783ae02bbabe3229bed32c3410059efce",
"0x017ae16c3cf206555d8e765e46c8c8db4427b073bd922d6039035629512d6c4f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
