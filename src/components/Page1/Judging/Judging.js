import React from 'react'
import styles from './Judging.module.css'
const Judging = ({judge,selectJudging}) => {
    //post
    return (
        <div className={styles.wrapper}>
            <button 
             type="button"
             onClick={selectJudging}
                className={styles.judgebtn} >
                판결하기
            </button>
        </div>
    );
};

export default Judging;