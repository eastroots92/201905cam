import React from 'react'
import styles from './Answers.module.css'
import classnames from 'classnames/bind' //클래스 동적으로 추가삭제등

const cx = classnames.bind(styles)
//key 프롭을 안주면 변경시 원래있던 데이터도 새로만들어야함. 배열요소를 렌더링할때 최상의 루트요소에게 유일하게 부여되는 값, prop과 좀 다름
const Answers = ({answers, selectAnswer, selectedIndex}) => {
    return (
        <ul className={styles.answers}>
           {answers.map(answer =>(
               <li 
                key={answer.key} 
                className={cx('answer',{selected: selectedIndex === answer.key})} 
                style={{backgroundColor: answer.color}}
                >
                   <button 
                    type="button" 
                    className={cx('button',{selected: selectedIndex === answer.key})} 
                    onClick={selectAnswer}
                    name={answer.key}
                   />
               </li>
           ))}
        </ul>
    );
};

export default Answers