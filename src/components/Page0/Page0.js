import React from 'react'
import styles from './Page0.module.css'
import Intro from '../Intro'
import Criminals from './Criminals'
import Startgame from './Startgame'

//(props) 인자도 디스트럭쳐링으로 필요한 프로퍼티 앤서스만 넘기기
const Page0 = ({criminals,selectedIndex, selectCriminal}) => (
  <div className={styles.wrapper}>
    <Intro />
    <div className={styles.centered}>   
      <Criminals 
        criminals={criminals} 
        selectedIndex={selectedIndex}
        selectCriminal={selectCriminal}
      /> 
      {/* <ColorCode answer={answers[correctAnswerIndex]}/> */}
    </div>
    <Startgame />
  </div>
)

export default Page0