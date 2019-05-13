import React from 'react';
import styles from './Userinfo.module.css'

const Userinfo = () => {
    return (
        <>
        <p>판사님의 나이와 성별을 알려주세요</p>
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

export default Userinfo;