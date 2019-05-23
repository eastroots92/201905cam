import React, { Component } from 'react';
import styles from './Page0.module.css'
import Intro from './Intro'
import Criminals from './Criminals'
import Heading from './Heading'



class Page0 extends Component {


  render() {
    const { 
      criminals,
      selectedIndex, 
      selectCriminal, 
      selectedSex, 
      selectedAge,
      selectSex,
      selectAge,
      startscroll
    } = this.props
    return (
      <>
      <Heading
        startscroll={startscroll}
      />
      <div className={styles.wrapper} name='intro'>
        <Intro 
          selectAge={selectAge}
          selectSex={selectSex}
          selectedSex={selectedSex}
          selectedAge={selectedAge}
        />
        <div className={styles.criminals}>   
          <Criminals 
            scrollToTop={this.scrollToTop}
            criminals={criminals} 
            selectedIndex={selectedIndex}
            selectCriminal={selectCriminal}
          /> 
        </div>
      </div>
      </>
    );
  }
}

export default Page0;
