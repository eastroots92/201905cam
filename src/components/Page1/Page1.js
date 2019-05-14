import React, { Component } from 'react'
import {url} from '../const'
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
    answer3:null,
    judge:null,
    probation:null,
    datapost:false
  }
//징역형:벌금형
  selectPenalty = (event) => {
    const { name } = event.target;
    this.setState({answer1:Number(name)})
  }
  sliderChange1 = (value) => {
    this.setState({
      answer2: value,
    })
  }

//집행유예 예:아니오
  selectProbation = (event) => {
    const { name } = event.target;
    this.setState({probation:Number(name)})
  }
  sliderChange2 = (value) => {
    this.setState({
      answer3: value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    const {answer1, answer2, answer3, probation, judge} = this.state
    const { selectedIndex }= this.props
    fetch(`${url}`, {
    method: 'post',
    body:JSON.stringify({
      "accId":selectedIndex,
      "answer1":answer1,
      "answer2":answer2,
      "answer3":answer3,
      "sex":probation,
      "age":probation
    }),
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    })
  }

  render() {
    const {criminals, selectedIndex, setInitialStage }=this.props
    const { answer1, answer2, answer3, judge, probation}=this.state
    return (
        <>
        {judge === null &&(
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
                sliderChange1={this.sliderChange1}
                sliderChange2={this.sliderChange2}
                probation={probation}
                answer1={answer1}
                answer2={answer2}
                answer3={answer3}
               />
             )}
             {probation !==null &&(
              <Judging
                onSubmit={this.onSubmit}
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
            answer3={answer3}
            setInitialStage={setInitialStage}
          />
        )}
      </>
    );
  }
}

export default Page1;
