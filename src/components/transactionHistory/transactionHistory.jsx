import styles from './TransactionHistory.module.css';
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';

const TransactionHistory = () => {
  return (
    <div className={styles['transaction-list-container']}>
      <IncomeList />
      <ExpenseList  />
    </div>
  )
}

export default TransactionHistory