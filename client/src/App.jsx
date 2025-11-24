import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './index.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExpenses = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await fetch(`${API_URL}/api/expenses`);
      if (response.ok) {
        const data = await response.json();
        setExpenses(data);
      }
    } catch (error) {
      console.error('Error fetching expenses:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleExpenseAdded = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  return (
    <div className="app-container">
      <h1>Personal Expense Tracker</h1>

      <div className="glass-panel">
        <ExpenseForm onExpenseAdded={handleExpenseAdded} />
      </div>

      <div className="glass-panel">
        <h2>Recent Expenses</h2>
        {loading ? (
          <p className="empty-state">Loading...</p>
        ) : (
          <ExpenseList expenses={expenses} />
        )}
      </div>
    </div>
  );
}

export default App;
