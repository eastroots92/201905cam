import React from 'react'
import styles from './Judging.module.css'
const Judging = ({onSubmit, comment,commentChange}) => {
    //post
    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.title}>피고인에게 마지막 한 마디</div>
                <input 
                className={styles.comment}
                type="text"
                maxLength="100"
                name="comment"
                placeholder="(공백 포함 100자 이내로 제한)"
                onChange={commentChange}
                />
            </div>
            <div>
                <button 
                type="button"
                onClick={onSubmit}
                className={styles.judgebtn} >
                    판결하기
                </button>
            </div>
        </div>
    );
};

export default Judging;