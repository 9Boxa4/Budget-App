import React from 'react';
import styles from './TransactionHistory.module.css'
import { TransactionContext } from '../../context/transaction-context';
import { useContext } from 'react';

const ExpenseList = () => {
    const {expenseTrack,fullIncome,setTransactions,transactions} = useContext(TransactionContext);

//setting values to have (.) before last two digits and on every third number (,)
    const settingValues = (someValue) =>
  {
    return someValue.toLocaleString(undefined,{ minimumFractionDigits:2});
  }

  function handleMouseLeave(e)
  {
      e.target.lastChild.classList.remove(styles[`delete-btn`])
      e.target.lastChild.classList.add(styles.hidden)
  }
  
  let expenseItems = expenseTrack.map((expense)=> 
  <div 
  className={styles['expense-list-block']} 
  key={expense.id}
  id={expense.id}
  onMouseEnter={hoverDelete} 
  onMouseLeave={handleMouseLeave}
  >
  {expense.description}
      <span className={styles['expenses-span']}> 
          -{settingValues(expense.value)}
      </span> 
      <span 
      className={fullIncome === 0 ? null : styles['expense-span-procent']}>
      {fullIncome===0? "": Math.round(expense.value/fullIncome*100)}{fullIncome === 0? "":"%"}
      </span>
  <span className={styles['hidden']} data-tool-tip='Click here or "X" if you want to remove the element'>X</span>
    </div>)

function hoverDelete(e){    
       e.target.lastChild.classList.remove(styles.hidden)
       e.target.lastChild.classList.add(styles['delete-btn'])

       e.target.lastChild.addEventListener('click',event=>
       {
         setTransactions(state=> state.filter(el=> el.id !==e.target.id));
         localStorage.setItem('transactions',JSON.stringify(transactions));
        })
}

  return (
    <div className={styles['expense-list-container']}>
    <h2 className={styles['expense-list-header']}>EXPENSES</h2>
    <div className={styles['expense-list']}>
      {expenseItems.length? expenseItems : 'No expenses to show right now'}       
    </div>
</div>
  )
}

export default ExpenseList