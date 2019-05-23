import React from 'react';
import styles from './Nextgame.module.css'

const Nextgame = ({
    setInitialStagePage2,
}) => {
    return (
        <div className={styles.wrapper}>
            <button
              className={styles.button}
              type="button"
              onClick={setInitialStagePage2}
            >
             다른 사건 판결하기
          </button>
        </div>
    );
};

export default Nextgame;