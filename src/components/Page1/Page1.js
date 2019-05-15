import React, { Component } from 'react'
import axios from 'axios'
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
    probation:null,
    datapost:false,
    type:null
  }
//징역형:벌금형
  selectPenalty = (event) => {
    let penalty
    const { name } = event.target
    if(name === '0'){penalty = 1}
    else if(name === '1'){penalty=100}
    this.setState({
      answer1:Number(name),
      answer2:penalty
    })
  }
  sliderChange1 = (value) => {
    this.setState({
      answer2: value,
    })
  }

//집행유예 예:아니오
  selectProbation = (event) => {
    const { name } = event.target;
    this.setState({
      probation:Number(name),
      answer3:Number(name)
    })
  }
  sliderChange2 = (value) => {
    this.setState({
      answer3: value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    const {answer1, answer2, answer3, probation} = this.state
    const { selectedIndex }= this.props

        if(answer1===0 && probation === 0){
          this.setState({
            type:0
          })
        }
        else if(answer1===0 && probation === 1){
          this.setState({
            type:1
          })
        }
        else if(answer1===1 && probation === 0){
          this.setState({
            type:2
          })
        }
        else if(answer1===1 && probation === 1){
          this.setState({
            type:3
          })
        }


    axios.post(`${url}`,
      {
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        accId:selectedIndex,
        answer1:answer1,
        answer2:answer2,
        answer3:answer3,
        sex:probation,
        age:probation
      }).then(res => {
        this.setState({
              datapost:true
        })
      }).catch( error => { console.log('failed', error) })
  }

  render() {
    const {criminals, selectedIndex, setInitialStage }=this.props
    const { answer1, answer2, answer3, probation, datapost,type}=this.state
    return (
        <>
        {datapost === false &&(
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
                answer2={answer2}
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
        {datapost===true &&(
          <Page2
            type={type}
            criminals={criminals}
            selectedIndex={selectedIndex}
            answer1={answer1}
            answer2={answer2}
            answer3={answer3}
            datapost={datapost}
            probation={probation}
            setInitialStage={setInitialStage}
          />
        )}
      </>
    );
  }
}

export default Page1;
