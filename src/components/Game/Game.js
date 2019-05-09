import React from 'react'
import styles from './Game.module.css'
import Criminals from '../Criminals'

//(props) 인자도 디스트럭쳐링으로 필요한 프로퍼티 앤서스만 넘기기
const Game = ({criminals,selectedIndex}) => (
  <div className={styles.wrapper}> 
    <div className={styles.centered}>
      <Criminals 
        criminals={criminals} 
        selectedIndex={selectedIndex}
      /> 
      {/* <ColorCode answer={answers[correctAnswerIndex]}/> */}
    </div>
  </div>
)

export default Game