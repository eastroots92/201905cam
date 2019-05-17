import React from 'react'
import styles from './Page0.module.css'
import Intro from '../Intro'
import Criminals from './Criminals'

const Page0 = ({
  criminals,
  selectedIndex, 
  selectCriminal, 
  selectedSex, 
  selectedAge,
  selectSex,
  selectAge
}) => (
  <div className={styles.wrapper}>
    <Intro 
      selectAge={selectAge}
      selectSex={selectSex}
      selectedSex={selectedSex}
      selectedAge={selectedAge}
    />
    <div className={styles.centered}>   
      <Criminals 
        criminals={criminals} 
        selectedIndex={selectedIndex}
        selectCriminal={selectCriminal}
      /> 
    </div>
  </div>
)

export default Page0