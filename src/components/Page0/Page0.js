import React from 'react'
import styles from './Page0.module.css'
import Intro from '../Intro'
import Criminals from './Criminals'
import Startgame from './Startgame'

const Page0 = ({criminals,selectedIndex, selectCriminal}) => (
  <div className={styles.wrapper}>
    <Intro />
    <div className={styles.centered}>   
      <Criminals 
        criminals={criminals} 
        selectedIndex={selectedIndex}
        selectCriminal={selectCriminal}
      /> 
    </div>
    <Startgame />
  </div>
)

export default Page0