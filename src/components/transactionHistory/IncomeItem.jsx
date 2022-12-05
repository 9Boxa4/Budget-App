import React,{useContext} from 'react';
import styles from "./TransactionHistory.module.css";
import {TransactionContext} from "../../context/transaction-context";
import { useEffect } from 'react';
import { hover } from '@testing-library/user-event/dist/hover';


const IncomeItem = () => {
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
        //  localStorage.setItem('transactions',JSON.stringify(transactions))
        })
      }

      useEffect(()=>{
        localStorage.setItem('transactions',JSON.stringify(transactions))
      },[transactions,hoverDelete])

      
function handleMouseLeave(e){
          e.target.lastChild.classList.remove(styles[`delete-btn`])
          e.target.lastChild.classList.add(styles.hidden)
      }
      
const deleteBtnEl = <span className={styles.hidden}data-tool-tip='Click here or "X" if you want to remove the element'>X</span> 

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
{deleteBtnEl}
  </div>
  )

  return (
    <>
    {incomeTrack.length?incomeItems:'No incomes to show at this time'}
    </>
  )
}

export default IncomeItem