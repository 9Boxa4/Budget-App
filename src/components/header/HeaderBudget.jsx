import React,{useContext} from 'react'
import styles from "./Header.module.css"
import { TransactionContext } from '../../context/transaction-context'


const HeaderBudget = () => {
  const {fullIncome,fullExpense,finalBudget} = useContext(TransactionContext) 
  // console.log(fullIncome,fullExpense,finalBudget);

  const settingValues = (someValue) =>
  {
    return someValue.toLocaleString(undefined,{ minimumFractionDigits:2})
  }

  return (
    <div className={styles["header_budget-container"]}>
        <p className={styles["current-budget"]}>
         {finalBudget>0? "+": null} {settingValues(finalBudget)}
        </p>
        <div className={styles['header_bugdet-transaction']}>
             <div className={styles['income-state']}>
                 <p>Income</p>
                 <p>
                  {fullIncome > 0 ? "+" : ""}{settingValues(fullIncome)}
                 </p>
             </div>
             <div className={styles['expense-state']}>
                 <p>Expenses</p>
                     <p className={styles['expense-state-assessment']}> 
                     {fullExpense > 0 ? "-": ""} {settingValues(fullExpense)}
                       <span className={fullIncome=== 0 ? null: styles['procent-final']}>
                        {fullIncome===0? "" : Math.round(fullExpense/fullIncome * 100)}{fullIncome===0
                        ? "" : "%"}
                       </span>
                      </p>
             </div>
         </div>
    </div>
  )
}

export default HeaderBudget