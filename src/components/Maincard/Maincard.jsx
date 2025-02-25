import React from 'react'
import styles from './Maincard.module.css'
import { BsArrowUpRight } from 'react-icons/bs'
import { MdArrowOutward } from 'react-icons/md'

function Maincard() {
  return (
    <div className={styles.container_wrapper}>
      <div className={styles.greeting_container}>
        <p className={styles.greeting}> <span className={styles.good_morning}>Good Morning, </span>Watanitya<br /> <span className={styles.good_morning}>Here</span>  is how things stand today!</p>
      </div>



      <div className={styles.header}>
        <p className={styles.title}>Total GWP Current year</p>
        <p className={styles.subtitle}>30% growth than last year</p>
      </div>

      <div className={styles.currentGwp}>
        <span className={styles.amount}>$120,873</span>
        <span className={styles.growth}>
          +17% <MdArrowOutward />
        </span>
      </div>

      <div className={styles.footer}>
        <p className={styles.gwpTitle}>GWP 2024</p>
        <p className={styles.gwpAmount}>$120,873</p>
      </div>
    </div>  )
}

export default Maincard