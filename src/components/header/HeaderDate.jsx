import React from 'react';
import styles from './Header.module.css'

const HeaderDate = () => {
    const date = new Date();
    const month = date.getMonth()
    const months=['January','February','March','April','May', 'June', 'July','August','September','October', 'November', 'December']

  return (
    <>
         <h2 className={styles["header_date"]}>Availible Bugdet in {months[month]} {date.getFullYear()}: </h2>
    </>
  )
}

export default HeaderDate