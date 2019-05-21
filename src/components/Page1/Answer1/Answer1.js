import React from 'react';
import styles from './Answer1.module.css'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)
const Answer1 = ({selectPenalty,answer1}) => {
    return (
        <>
        <div className={styles.title}>어떤 형벌을 선택하실 건가요?</div>
        <div className={styles.wrapper}>
            <button 
                type="button" 
                className={cx('button',{selected: answer1 === 0})} 
                onClick={selectPenalty}
                name='0'>
                징역형
            </button>
            <button
                type="button" 
                className={cx('button',{selected: answer1 === 1})} 
                onClick={selectPenalty}
                name='1'>
                벌금형
            </button>
        </div>
        </>
    );
};
export default Answer1;