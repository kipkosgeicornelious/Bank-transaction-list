// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import TransactionFilter from './TransactionFilter';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  const fetchData = async () => {
    try {
      // Fetch transaction data from API
      const response = await fetch('https://api.example.com/transactions');
      const data = await response.json();
      setTransactions(data);
      setFilteredTransactions(data); // Set initial filtered transactions
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilterChange = (filterCriteria) => {
    // Filter transactions based on filter criteria
    const filtered = transactions.filter(transaction => {
      // Implement your filtering logic here
      return true; // For demonstration purposes, we're not implementing actual filtering
    });
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h1>Recent Bank Transactions</h1>
      <TransactionFilter onFilterChange={handleFilterChange} />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}

export default App;
