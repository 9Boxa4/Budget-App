import React,{useContext} from 'react';
import styles from "./TransactionHistory.module.css";
import {TransactionContext} from "../../context/transaction-context";

const IncomeList = () => {
  const {incomeTrack,setTransactions,transactions} = useContext(TransactionContext);

//setting values to have (.) before last two digits and on every third number (,)
const settingValues = (someValue) =>
{
  return someValue.toLocaleString(undefined,{ minimumFractionDigits:2})
}

function hoverDelete(e){     
       e.target.lastChild.classList.remove(styles.hidden)
       e.target.lastChild.classList.add(styles['delete-btn'])

       e.target.lastChild.addEventListener('click',()=>
       {
         setTransactions(state=> state.filter(el=> el.id !==e.target.id))
         localStorage.setItem('transactions',JSON.stringify(transactions))
        })
      }
      
      function handleMouseLeave(e){
          e.target.lastChild.classList.remove(styles[`delete-btn`])
          e.target.lastChild.classList.add(styles.hidden)
      }
      
//creating a list out of income elements
let incomeItems = incomeTrack.map((income)=> 
 <div
className={styles['income-list-block']}
 key={income.id} 
 id={income.id}
 onMouseEnter={hoverDelete}
 onMouseLeave={handleMouseLeave}
 >
{income.description} 
 <span className={styles['Income-span']}> +{settingValues(income.value)}</span>  
<span className={styles.hidden}data-tool-tip='Click here or "X" if you want to remove the element'>X</span> 

  </div>
  )
  

  return (
    <div className={styles['income-list-container']}>
          <h2 className={styles['income-list-header']}>INCOME</h2>
          <div className={styles['income-list']} 
          >
          {incomeTrack.length?incomeItems:'No incomes to show at this time'}
          </div>
      </div>

  )
}

export default IncomeList