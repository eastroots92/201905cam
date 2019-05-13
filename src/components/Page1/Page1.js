import React, { Component } from 'react'
import styles from './Page1.module.css'
import Intro from '../Intro'
import Criminal from './Criminal'
import Answer1 from './Answer1'
import Answer2 from './Answer2'
import Judging from './Judging'
import Page2 from '../Page2'

class Page1 extends Component {
  state= {
    answer1:null,
    answer2:null,
    judge:null,
    probation:null
  }
//징역형:벌금형
  selectPenalty = (event) => {
    const { name } = event.target;
    this.setState({answer1:Number(name)})
  }
//집행유예 예:아니오
  selectProbation = (event) => {
    const { name } = event.target;
    this.setState({probation:Number(name)})
  }
//판결하기 선택
  selectJudging= (event) => {
    this.setState({judge:1})
  }
  render() {
    const {criminals, selectedIndex, setInitialStage }=this.props
    const { answer1, answer2, judge, probation}=this.state
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
                selectProbation={this.selectProbation}
                probation={probation}
                answer1={answer1}
                answer2={answer2}
               />
             )}
             {probation !==null &&(
              <Judging
                selectJudging={this.selectJudging}
                judge={judge}
              />
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
