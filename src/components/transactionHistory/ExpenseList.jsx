import React from 'react';
import styles from './TransactionHistory.module.css'
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  return (
    <div className={styles['expense-list-container']}>
    <h2 className={styles['expense-list-header']}>EXPENSES</h2>
    <div className={styles['expense-list']}>
      <ExpenseItem/>      
    </div>
</div>
  )
}

export default ExpenseList