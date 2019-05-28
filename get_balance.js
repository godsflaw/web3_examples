const Web3 = require('web3');
const rpcURL = 'https://parity.expotrading.com';
const web3 = new Web3(rpcURL);
const address = '0xB8bBf36ba36fc78F3F137C514Af33709fFFBa604';

(async () => {
  const balance = await web3.eth.getBalance(address);
  console.log('balance: ' + web3.utils.fromWei(balance, 'ether'));
})();
