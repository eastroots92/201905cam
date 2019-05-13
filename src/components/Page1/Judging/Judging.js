import React from 'react'
import styles from './Judging.module.css'
const Judging = () => {
    return (
        <div className={styles.wrapper}>
            <button className={styles.judgebtn}>
                판결하기
            </button>
        </div>
    );
};

export default Judging;