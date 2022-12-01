import React,{useContext} from 'react';
import { TransactionContext } from '../../context/transaction-context';
import styles from './TransactionHistory.module.css'


const ExpenseItem = () => {
    const {expenseTrack,fullIncome,setTransactions,transactions} = useContext(TransactionContext);

    //setting values to have (.) before last two digits and on every third number (,)
    const settingValues = (someValue) =>
  {
    return someValue.toLocaleString(undefined,{ minimumFractionDigits:2});
  }

  function hoverDelete(e){    
    e.target.lastChild.classList.remove(styles.hidden)
    e.target.lastChild.classList.add(styles['delete-btn'])

    e.target.lastChild.addEventListener('click',event=>
    {
      setTransactions(state=> state.filter(el=> el.id !==e.target.id));
      localStorage.setItem('transactions',JSON.stringify(transactions));
     })
}

  function handleMouseLeave(e)
  {
      e.target.lastChild.classList.remove(styles[`delete-btn`])
      e.target.lastChild.classList.add(styles.hidden)
  }

  const expensesPercentEl = (expenseValue) =>
  {
    return <>{fullIncome===0? "": Math.round(expenseValue/fullIncome*100)}{fullIncome === 0? "":"%"}</>
  }

    const deleteBtnEl = <span className={styles['hidden']} data-tool-tip='Click here or "X" if you want to remove the element'>X</span>

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
      {expensesPercentEl(expense.value)}
      </span>
    {deleteBtnEl}
    </div>)


  return (
   <>
         {expenseItems.length? expenseItems : 'No expenses to show right now'} 
   </>
  )
}

export default ExpenseItem