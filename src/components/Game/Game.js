import React from 'react'
import styles from './Game.module.css'
import Score from '../Score'
import ColorCode from '../ColorCode'
import Answers from '../Answers'

//(props) 인자도 디스트럭쳐링으로 필요한 프로퍼티 앤서스만 넘기기
const Game = ({answers, selectAnswer, correctAnswerIndex, score, selectedIndex}) => (
  <div className={styles.wrapper}> 
    <Score score={score}/>
    <div className={styles.centered}>
      <ColorCode answer={answers[correctAnswerIndex]}/>
      <Answers 
        answers={answers} 
        selectAnswer={selectAnswer}
        selectedIndex={selectedIndex}
      />
    </div>
  </div>
)

export default Game