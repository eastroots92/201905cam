import React from 'react';
import styles from './Intro.module.css'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)
const sex = [
    {key:0,
     val:'남성'},
    {key:1,
    val:'여성'},
    {key:2,
    val:'그 외'}
]
const age = [
    {key:0,
     val:'10대'},
    {key:1,
    val:'20대'},
    {key:2,
    val:'30대'},
    {key:3,
    val:'40대'},
    {key:4,
    val:'50대'},
    {key:5,
    val:'60대 이상'}
]

const Intro = ({
    selectedSex,
    selectedAge,
    selectSex,
    selectAge
}) => {
    return (
        <div className={styles.wrapper}>
        당신은
            <ul className={styles.selectage}>
            {age.map(a =>(
                <li 
                    key={a.key}
                    className={cx('age',{selected: selectedAge === a.key})} 
                    >
                    <button 
                        type="button" 
                        className={cx('button',{selected: selectedAge === a.key})} 
                        onClick={selectAge}
                        name={a.key}
                    >
                        {a.val}
                    </button>
                </li>
            ))}
            </ul>
            <ul className={styles.selectsex}>
            {sex.map(s =>(
                <li 
                    key={s.key}
                    className={cx('sex',{selected: selectedSex === s.key})} 
                    >
                    <button 
                        type="button" 
                        className={cx('button',{selected: selectedSex === s.key})} 
                        onClick={selectSex}
                        name={s.key}
                    >
                        {s.val}
                    </button>
                </li>
            ))}
            </ul>
            <div className={styles.userinfo}>
                '시민판사' 입니다.<br/>
                오늘 당신은 불법촬영 사건을 판결해야합니다.<br/>
                아래 피고인 5명에게 당신은 어떤 판결을 내리시겠습니까?
            </div>
        </div>
    );
};

export default Intro;