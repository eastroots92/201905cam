import React from 'react';
import styles from './Startgame.module.css'

const Startgame = () => {
    return (
        <div className={styles.wrapper}>
            <button className={styles.startbtn}>피고인 선택</button>
        </div>
    );
};

export default Startgame;