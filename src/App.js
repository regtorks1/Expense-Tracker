import Transactions from './components/TransactionSlice';
import Budgets from './features/budgets/Budget';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
        <Budgets />
        <Transactions />
      </header>
    </div>
  );
}

export default App;
