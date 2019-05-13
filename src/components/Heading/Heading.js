import React from 'react'
import styles from './Heading.module.css'

const Heading = () => (
  <h1 className={styles.wrapper}>
    시민 판사
    <em className={styles.emphasis}>불법촬영 범죄를 판결하다</em>
  </h1>
)

export default Heading