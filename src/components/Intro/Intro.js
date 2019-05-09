import React from 'react';
import styles from './Intro.module.css'

const Intro = () => {
    return (
        <div className={styles.wrapper}>
            시민배심원이 되어 판결을 내려보세요.<br/>판결을 내릴 피고인을 선택하세요
        </div>
    );
};

export default Intro;