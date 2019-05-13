import React from 'react';
import styles from './Answer1.module.css'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)
const Answer1 = ({selectPenalty,answer1}) => {
    return (
        <>
        <p>어떤 형벌을 내리실건가요?</p>
        <div className={styles.wrapper}>
            <button 
                type="button" 
                className={cx('button',{selected: answer1 === 0})} 
                onClick={selectPenalty}
                name='0'>
                징역형(실형)
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