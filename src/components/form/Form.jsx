import React,{useState} from 'react'
import styles from'./Form.module.css'
import { TransactionContext } from '../../context/transaction-context'
import {v4 as uuidv4} from 'uuid'
import { useContext } from 'react'
import { useEffect } from 'react'

export const Form = (props) => {
  const {transactions,setTransactions} = useContext(TransactionContext);

  const [choice,setChoice] = useState('-');
  const [description,setDescription] = useState('')
  const [valueInput,setValueInput] = useState('');
  const [id,setId] = useState(uuidv4())

  //function for checking if there is only spaces
  const isEmpty = (spaces) => {
   return spaces.trim().length === 0 
  }

const checkDescription = (descriptionValue) =>{
   if( descriptionValue.length >=50 ||
    descriptionValue.length === 0 ||
    isEmpty(descriptionValue)){
        return true
    }else{
        return false;
    }
}

const checkValue= (numberValue)=>{
    if(
    !Number.isFinite(+numberValue) ||
    +numberValue<0 ||
    +numberValue.length ===0){
        return true
    }else{
      return  false
    }
}

 //Handeling submiting form
 const handleSubmit = (e) =>
{
  e.preventDefault();
    //Checking description validity
  if(
    checkDescription(description)
    ||
    //checking value validity
    checkValue(valueInput)
     ){
      alert ('The input you have entered either is not valid, or you need to retype and wait a few seconds')
    }else
    {
      setId(uuidv4())
      setTransactions(state=>[...state,{
        id:id,type: choice === "+"? "income": "expense", description:description,value:+valueInput
      }])
      clearInputFields()
    }
  }
  

  useEffect(()=>
  {
    localStorage.setItem('transactions',JSON.stringify(transactions));
  },[handleSubmit])

 //clearing input fields
function clearInputFields (){
  document.getElementById('formId').reset();
   setTimeout(()=>{
    setDescription('');
    setValueInput('')
    setChoice('-');
   },500)
 }


  return (
 
    <form
    onSubmit={handleSubmit} 
    className={styles['input-form']}
    >
      <select 
      value={choice}
      onChange={(e=>setChoice(e.target.value))}
      >
        <option value={"-"}>-</option>
        <option value={"+"}>+</option>
      </select>
      
      <input 
      onChange={(e=> setDescription(e.target.value))} 
      type="text" 
      placeholder='Add description' 
      />

      <input 
      onChange={(e=> setValueInput(e.target.value))} 
      type="number" 
      placeholder="Value" 
      />

     <input  
     type="submit"  
     value={choice === '+'? '✅' : '⛔'}  
     />
  </form>
  
  )
}
export default Form