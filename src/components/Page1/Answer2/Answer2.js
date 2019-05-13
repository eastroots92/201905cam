import React from 'react';
import styles from './Answer2.module.css'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)
const Answer2 = () => {
    return (
        <>
         <p>형량을 얼마나 구형할까요?</p>
        <div className={styles.wrapper}>
            <button>
                징역형(실형)
            </button>
            <button>
                징역형(집행유예)
            </button>
            <button>
                벌금형
            </button>
        </div>
        </>
    );
};

export default Answer2;