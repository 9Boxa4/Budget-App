import React from 'react';
import styles from "./TransactionHistory.module.css";
import IncomeItem from './IncomeItem';

const IncomeList = () => {

  return (
    <div className={styles['income-list-container']}>
          <h2 className={styles['income-list-header']}>INCOME</h2>
          <div className={styles['income-list']} 
          >
          <IncomeItem/>
          </div>
      </div>

  )
}

export default IncomeList