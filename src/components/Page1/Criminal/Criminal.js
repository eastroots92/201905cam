import React from 'react';
import styles from './Criminal.module.css'
// import classnames from 'classnames/bind'

// const cx = classnames.bind(styles)
const Criminal= ({criminals, selectedIndex}) => {
    return (
        <div className={styles.wrapper}>
                <div className={styles.criminalimg}>
                    <img src={criminals[selectedIndex].imgurlc} alt="" width="200"/>
                </div>               
                <div className={styles.criminalinfo}>
                    <div className={styles.script}>{criminals[selectedIndex].script}</div>     
                    <div className={styles.law}> {criminals[selectedIndex].law}</div>
               </div>
        </div>
    );
};

export default Criminal;