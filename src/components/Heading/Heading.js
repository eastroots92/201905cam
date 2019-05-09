import React from 'react'
import styles from './Heading.module.css'

const Heading = () => (
  <h1 className={styles.wrapper}>
    마부작침
    <em className={styles.emphasis}>제목</em>
  </h1>
)

export default Heading