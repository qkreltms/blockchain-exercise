const Blockchain = require('./blockchain')

const bitcoin = new Blockchain()
bitcoin.createNewBlock(2389, 'AVSEFSEFSAEF', '912qQDWQWQ')

bitcoin.createNewTransaction(100, 'ALEXSEFSEFAFA', 'JENSEFSEFSEFSEF')

// 마이닝
bitcoin.createNewBlock(2389, 'AVSEFSEFSAEF', '912qQDWQWQ')

bitcoin.createNewTransaction(100, 'ALEXSEFSEFAFA', 'JENSEFSEFSEFSEF')
bitcoin.createNewTransaction(100, 'ALEXSEFSEFAFA', 'JENSEFSEFSEFSEF')
bitcoin.createNewTransaction(100, 'ALEXSEFSEFAFA', 'JENSEFSEFSEFSEF')

// 마이닝
bitcoin.createNewBlock(112, 'AVSEFSEFSAEF', '912qQDWQWQ')
// console.log(bitcoin)

const previouseBlockHash = 'ASDFSDFSDFSD';
const currentBlockData = [
    {
    amount: 10,
    sender: 'SDFSDFSDF',
    recipient: 'AFSFE'
}, {
    amount: 20,
    sender: 'FFFEFS',
    recipient: 'FFFAFSFE'
}, {
    amount: 30,
    sender: 'CCCCCSDFSDFSDF',
    recipient: 'CCCAFSFE'
}]
const nonce = 100; // 트랜잭션 블록 번호

console.log(bitcoin.hashBlock(previouseBlockHash, currentBlockData, nonce));
