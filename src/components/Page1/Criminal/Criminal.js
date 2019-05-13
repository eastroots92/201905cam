import React from 'react';
import styles from './Criminal.module.css'
// import classnames from 'classnames/bind'

// const cx = classnames.bind(styles)
const Criminal= ({criminals, selectedIndex}) => {
    return (
        <div className={styles.wrapper}>
                <div className={styles.criminalimg}>
                    <img src={criminals[selectedIndex].imgurl} alt="" width="200"/>
                </div>               
                <div className={styles.criminalinfo}>
                {criminals[selectedIndex].where}<br/>
                {criminals[selectedIndex].who}<br/>
                {criminals[selectedIndex].what}<br/>
                {criminals[selectedIndex].how}<br/>
               </div>
        </div>
    );
};

export default Criminal;