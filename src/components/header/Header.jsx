import React,{useContext} from 'react'
import styles from "./Header.module.css"
import HeaderBudget from './HeaderBudget'
import HeaderDate from './HeaderDate';

const Header = () => {
  return (
    <header className={styles["header-container"]}>
        <HeaderDate/>
        <HeaderBudget/>
    </header>
  )
}

export default Header