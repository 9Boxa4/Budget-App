import { createContext,useState,useEffect } from "react";
import {DUMMY_DATA} from '../data/transaction-data'

export const  TransactionContext = createContext();

export const TransactionProvider = ({children})=>{
    const [transactions,setTransactions] = useState(DUMMY_DATA);
    
    
    useEffect(()=>{
        if(localStorage.getItem('transactions') === null){
            localStorage.setItem('transactions',JSON.stringify(transactions))
        }
        else{
            setTransactions(JSON.parse(localStorage.getItem('transactions')))
        }
    },[])

    
    //Split income and expense objects into different categories
    const incomeTrack = transactions.filter(data=>data.type === 'income');
    const expenseTrack = transactions.filter(data=>data.type === 'expense');
    
    // Summed incomes and Expenses
    const fullIncome = incomeTrack.reduce((acc,currentVal)=> acc + currentVal.value,0);
    const fullExpense = expenseTrack.reduce((acc,currentVal)=> acc + currentVal.value,0);

    //final Budget
    const finalBudget = fullIncome-fullExpense;


    return(
        <TransactionContext.Provider value={{incomeTrack,expenseTrack,fullIncome,fullExpense,finalBudget,transactions,setTransactions}}>
            {children}
        </TransactionContext.Provider>
    )
}