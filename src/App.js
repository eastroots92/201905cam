import React, { Component } from 'react'
import styles from './App.module.css'
import { Navigation, Heading, Page0, Dialog} from './components'
// import { createRGBcode, sampleintLessThan } from './utils'
class App extends Component {
  state = { 
    criminals: [
      { key:0, name:'0', where:'전동차', who:'연령불상', what:'신체부위', how:'휴대전화로' },
      { key:1, name:'1', where:'전동차', who:'연령불상', what:'신체부위', how:'휴대전화로' },
      { key:2, name:'2', where:'전동차', who:'연령불상', what:'신체부위', how:'휴대전화로' },
      { key:3, name:'3', where:'전동차', who:'연령불상', what:'신체부위', how:'휴대전화로' },
      { key:4, name:'4', where:'전동차', who:'연령불상', what:'신체부위', how:'휴대전화로' },
    ], 
    selectedIndex: null,
  }

  selectCriminal = (event) => {
    const { name } = event.target
    this.setState({selectedIndex:Number(name)})
  }

  setNextStage = () => {
    this.setState({
      criminals: [
        { key:0, name:'0', where:'전동차', who:'연령불상', what:'신체부위', how:'휴대전화로' },
        { key:1, name:'1', where:'전동차', who:'연령불상', what:'신체부위', how:'휴대전화로' },
        { key:2, name:'2', where:'전동차', who:'연령불상', what:'신체부위', how:'휴대전화로' },
        { key:3, name:'3', where:'전동차', who:'연령불상', what:'신체부위', how:'휴대전화로' },
        { key:4, name:'4', where:'전동차', who:'연령불상', what:'신체부위', how:'휴대전화로' },
      ], 
      selectedIndex: null,
    })
  }

  setInitialStage = () => {
    this.setState({
      criminals: [
        { key:0, name:'0', where:'전동차', who:'연령불상', what:'신체부위', how:'휴대전화로' },
        { key:1, name:'1', where:'전동차', who:'연령불상', what:'신체부위', how:'휴대전화로' },
        { key:2, name:'2', where:'전동차', who:'연령불상', what:'신체부위', how:'휴대전화로' },
        { key:3, name:'3', where:'전동차', who:'연령불상', what:'신체부위', how:'휴대전화로' },
        { key:4, name:'4', where:'전동차', who:'연령불상', what:'신체부위', how:'휴대전화로' },
      ], 
      selectedIndex: null,
    })
  } 

  render() {
    const { criminals, selectedIndex }=this.state
    return (
      <div className={styles.wrapper}>
        <Navigation />
        <Heading />
        {selectedIndex == null && (
        <Page0 
            selectCriminal={this.selectCriminal}
            criminals={criminals} 
            selectedIndex={selectedIndex}
        />
        )}
        {/* selectedIndex가 널이 아닐때만 조건부 렌더, 참이면 && 뒤값 반환 falsy value */} 
        {selectedIndex!== null && (
          <Dialog 
            selectedIndex={selectedIndex}
            setNextStage={this.setNextStage}
            setInitialStage={this.setInitialStage}
          />     
        )}
      </div>
    )
  }
}

export default App
