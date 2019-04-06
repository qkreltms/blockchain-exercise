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
console.log(bitcoin)