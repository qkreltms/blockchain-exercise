const sha256 = require("sha256");

class Blockchain {
    constructor() {
        this.chain = [];
        //validate 되지 않은 트랜잭션
        this.pendingTransactions = [];
    }

    createNewBlock(nonce, previousBlockHash, hash) {
        const newBlock = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.pendingTransactions,
            nonce,
            hash,
            previousBlockHash
        }

        this.pendingTransactions = []
        this.chain.push(newBlock)

        return newBlock
    }

    getLastBlock() {
        if (this.chain.length < 0) return;
        return this.chain[this.chain.length - 1]
    }

    createNewTransaction(amount, sender, recipient) {
        const newTransaction = {
            amount: amount,
            sender: sender,
            recipient: recipient
        }

        this.pendingTransactions.push(newTransaction)

        return this.getLastBlock()
    }

    hashBlock(previousBlockHash, currentBlockData, nonce) {
        // 모든 데이터를 string으로 변경
        const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
        const hash = sha256(dataAsString);
        return hash;
    }
}

module.exports = Blockchain
