import React, { Component } from 'react'
import styles from './Page1.module.css'
import Intro from '../Intro'
import Criminal from './Criminal'
import Answer1 from './Answer1'
import Answer2 from './Answer2'
import Judging from './Judging'
import Userinfo from './Userinfo'
import Page2 from '../Page2'

class Page1 extends Component {
  state= {
    answer1:null,
    answer2:null,
    judge:null,
    userinfo:null
  }

  selectPenalty = (event) => {
    const { name } = event.target;
    this.setState({answer1:Number(name)})
  }
  selectSentence = (event) => {
    const { value } = event.target;
    this.setState({answer2:value})
  }

  render() {
    const {criminals, selectedIndex, setInitialStage }=this.props
    const { answer1, answer2, judge, userinfo }=this.state
    return (
        <>
        {judge == null &&(
            <div className={styles.wrapper}>
            <Intro />
            <div className={styles.centered}>   
              <Criminal
                criminals={criminals} 
                selectedIndex={selectedIndex}
              />
              <Answer1 
                selectPenalty={this.selectPenalty}
                answer1={answer1}
              />
             {answer1 !==null &&(
               <Answer2
                selectSentence={this.selectSentence}
                answer2={answer2}
               />
             )}
             {answer2 !==null &&(
               <Userinfo/>
             )}
             {userinfo !==null &&(
              <Judging/>
             )}
            </div>
          </div>
        )}
        {judge !== null &&(
          <Page2
            criminals={criminals}
            selectedIndex={selectedIndex}
            answer1={answer1}
            answer2={answer2}
            setInitialStage={setInitialStage}
          />
        )}
      </>
    );
  }
}

export default Page1;
