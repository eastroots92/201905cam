import React, { Component } from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styles from './Page0.module.css'
import Intro from './Intro'
import Criminals from './Criminals'
import Heading from './Heading'



class Page0 extends Component {
  startscroll = () => {
    scroller.scrollTo('intro', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutCubic'
    })
  }

  render() {
    const { 
      criminals,
      selectedIndex, 
      selectCriminal, 
      selectedSex, 
      selectedAge,
      selectSex,
      selectAge
    } = this.props
    return (
      <>
      <Heading
        startscroll={this.startscroll}
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
