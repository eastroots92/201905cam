import React from 'react'
import styles from './Judging.module.css'
const Judging = ({onSubmit}) => {
    //post
    return (
        <div className={styles.wrapper}>
            <button 
             type="button"
             onClick={onSubmit}
                className={styles.judgebtn} >
                판결하기
            </button>
        </div>
    );
};

export default Judging;