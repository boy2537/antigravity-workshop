function ExpenseList({ expenses }) {
    if (expenses.length === 0) {
        return <p className="empty-state">No expenses recorded yet.</p>;
    }

    return (
        <ul className="expense-list">
            {expenses.map((expense) => (
                <li key={expense.id} className="expense-item">
                    <div className="expense-details">
                        <strong>{expense.description}</strong>
                        <span className="expense-category">{expense.category}</span>
                        <small style={{ color: 'var(--text-secondary)' }}>
                            {new Date(expense.createdAt).toLocaleDateString()}
                        </small>
                    </div>
                    <span className="expense-amount">
                        ฿{parseFloat(expense.amount).toFixed(2)}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default ExpenseList;
