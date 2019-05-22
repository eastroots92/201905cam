import React from 'react';
import styles from './Criminal.module.css'
import clip from '../../../assets/img/clip.png'
// import classnames from 'classnames/bind'

// const cx = classnames.bind(styles)
const Criminal= ({criminals, selectedIndex}) => {
    return (
        <div className={styles.wrapper}>
                <div className={styles.criminalimg}>
                    <img className={styles.photo} src={criminals[selectedIndex].imgurlc}/>
                    <img className={styles.clip} src={clip}/>
                </div>               
                <div className={styles.criminalinfo}>
                    <div className={styles.script} dangerouslySetInnerHTML={{__html: criminals[selectedIndex].script}}></div>     
                    <div className={styles.law}> {criminals[selectedIndex].law}</div>
               </div>
        </div>
    );
};

export default Criminal;