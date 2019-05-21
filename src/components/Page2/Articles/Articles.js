import React from 'react';
import styles from './Articles.module.css'
const Articles = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>관련기사보기</div>
            <ul className={styles.articles}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default Articles;