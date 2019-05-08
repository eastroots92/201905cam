import React from 'react'
import styles from './ColorCode.module.css'

const ColorCode = ({answer}) => (
    <div className={styles.wrapper}>{answer.color}</div>
)


export default ColorCode