import { useContext } from 'react';
import Form from './components/form/Form';
import Header from './components/header/Header';
import TransactionHistory from './components/transactionHistory/transactionHistory';
import './App.css';
import {TransactionContext} from './context/transaction-context'

function App() {
const transactions = useContext(TransactionContext);
// console.log(transactions);
  return (
      <div className="App">
        <Header/>
        <Form/>
        <TransactionHistory/>
      </div>
  );
}

export default App;
