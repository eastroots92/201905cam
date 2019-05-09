import React from 'react';
import styles from './Criminals.module.css'

const Criminals = ({criminals}) => {
    return (
        <div className={styles.wrapper}>{criminals.name}</div>
    );
};

export default Criminals;