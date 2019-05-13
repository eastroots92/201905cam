import React from 'react'
import styles from './Answers.module.css'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)
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