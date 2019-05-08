import React from 'react'
import styles from './Heading.module.css'

const Heading = () => (
  <h1 className={styles.wrapper}>
    The Great
    <em className={styles.emphasis}>RGB</em>
    Guessing Challenge
  </h1>
)

export default Heading