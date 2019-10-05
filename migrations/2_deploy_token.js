const ScepterCash = artifacts.require("ScepterCash");

module.exports = function(deployer, network, accounts) {
  let addr;
  if (network === 'mainnet') {
    addr = '0xef17B02EdB7F35917fedFb1D94Af1bD1B061dD37';
  } else {
    addr = accounts[0];
    console.log('Wallet Address:', addr);
  }
  let amount = web3.utils.toWei('200000000', 'ether');
  let name = 'ScepterCash';
  let symbol = 'SCPT';
  let decimals = 18;
  deployer.deploy(ScepterCash, addr, amount, name, symbol, decimals);
};
