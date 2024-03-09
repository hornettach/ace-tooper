class AceTrooper {
    constructor(name, cryptoRank, cryptoBalance) {
      this.name = name;
      this.cryptoRank = cryptoRank || 'Bronze';
      this.cryptoBalance = cryptoBalance || 0;
      this.cryptoPortfolio = [];
    }
  
    increaseCryptoBalance(amount) {
      this.cryptoBalance += amount;
      console.log(`${this.name} earned ${amount} crypto coins. New balance: ${this.cryptoBalance}`);
    }
  
    investInCrypto(coinName, amount) {
      const cryptoInvestment = {
        coin: coinName,
        amount: amount,
      };
      this.cryptoPortfolio.push(cryptoInvestment);
      console.log(`${this.name} invested ${amount} in ${coinName}.`);
    }
  
    displayCryptoStats() {
      console.log(`
        Ace Trooper Information:
        Name: ${this.name}
        Crypto Rank: ${this.cryptoRank}
        Crypto Balance: ${this.cryptoBalance} coins
        Crypto Portfolio: ${this.cryptoPortfolio.map(investment => `${investment.amount} ${investment.coin}`).join(', ')}
      `);
    }
  }
  
  // Example usage
  const cryptoTrooper = new AceTrooper('CryptoAce', 'Silver', 100);
  
  cryptoTrooper.increaseCryptoBalance(50);
  cryptoTrooper.investInCrypto('Bitcoin', 20);
  cryptoTrooper.investInCrypto('Ethereum', 30);
  cryptoTrooper.displayCryptoStats();
  