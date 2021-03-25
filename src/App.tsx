import React from 'react';
import logo from './logo.svg';
import './App.css';
import BankAccount from './BankAccount'

const bankData = [
  {
      name: "Marinas Bank Account",
      currentBalance: 2000, 
      transactions: [
          {description: "Blue flower", price: 55.00, isDeposit: false}, 
          {description: "Sun flower", price: 100.00, isDeposit: false}, 
          {description: "Roses", price: 149.00, isDeposit: false},
          {description: "Andy transfered", price: 1000.00, isDeposit: true}
      ]   
  }, 
  {
      name: "Andys Bank Account",
      currentBalance: 3000,  
      transactions: [
          {description: "Swansea top", price: 200.00}, 
          {description: "Coffee to go", price: 43.00}, 
          {description: "Tea", price: 30.00},
          {description: "Transfere to Marina", price: 1000.00, isDeposit: false}
      ]
  }

]

function App() {
  return (
    <div>
        <header>
            <h1>Bank JSX Crypto</h1>
        </header>
        {bankData.map((ba, i) => <BankAccount {...ba} />)}
    </div>
  );
}

export default App;
