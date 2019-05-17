import React, { Component } from 'react'
import axios from 'axios'
import {url} from '../const'
import styles from './Page1.module.css'
import Criminal from './Criminal'
import Answer1 from './Answer1'
import Slider1 from './Slider1'
import Probation from './Probation'
import Judging from './Judging'
import Page2 from '../Page2'

class Page1 extends Component {
  constructor(){
    super()
    this.state= {
      answer1:null,
      answer2:null,
      answer3:null,
      probation:null,
      comment:'',
      datapost:false,
      type:null,
      slider1flag:0,
      slider2flag:0
    }
  }

  setInitialStagePage1 = () => {
    this.props.setInitialStage()
    this.setState({
      answer1:null,
      answer2:null,
      answer3:null,
      probation:null,
      comment:'',
      datapost:false,
      type:null,
      slider1flag:0,
      slider2flag:0
    })
  } 
//징역형:벌금형
  selectPenalty = (event) => {
    let penalty
    const { name } = event.target
    if(name === '0'){penalty = 1}
    else if(name === '1'){penalty=100}
    this.setState({
      answer1:Number(name),
      answer2:penalty,
    })
  }

  sliderChange1 = (value) => {
      let flag1
      if(this.state.answer1===0 && value<=36){
        flag1=1
      }else if(this.state.answer1 ===1 && value<=5000000){
        flag1=1
      }else{
        flag1=0
      }

      let flag2 
      if(this.state.answer1===0 &&value>36){
        flag2=1
      }else if(this.state.answer1 ===1 && value>5000000){
        flag2=1
      }else{flag2=0}


    this.setState({
      answer2: value,
      slider1flag:flag1,
      slider2flag:flag2
    })
  }

//집행유예 예:아니오
  selectProbation = (event) => {
    const { name } = event.target
    let flag2
    (name==='0')?flag2=1:flag2=0
    this.setState({
      probation:Number(name),
      slider2flag:flag2,
      answer3:12
    })
  }
  sliderChange2 = (value) => {
    this.setState({
      answer3: value,
      slider2flag:1
    })
  }
  //코멘트
  commentChange = (e) => {
    this.setState({
      comment:e.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    const {answer1, answer2, answer3, probation, comment} = this.state
    const { selectedIndex, selectedAge, selectedSex }= this.props

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
        sex:selectedSex,
        age:selectedAge,
        probation:probation,
        comment:comment
      }).then(res => {
        console.log(
          {
            accId:selectedIndex,
            answer1:answer1,
            answer2:answer2,
            answer3:answer3,
            sex:selectedSex,
            age:selectedAge,
            probation:probation,
            comment:comment
          }
        )
        this.setState({
              datapost:true
        })
      }).catch( error => { console.log('failed', error) })
  }

  render() {
    const { criminals, selectedIndex }=this.props
    const { answer1, answer2, answer3, probation, datapost, type, comment, slider1flag, slider2flag }=this.state
    return (
        <>
        {datapost === false &&(
          <div className={styles.wrapper}>
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
              {answer1 !== null &&(
                  <Slider1
                  sliderChange1={this.sliderChange1}
                  answer1={answer1}
                  answer2={answer2}
                />
              )}
             {slider1flag === 1 &&(
               <Probation
                selectProbation={this.selectProbation}
                sliderChange1={this.sliderChange1}
                sliderChange2={this.sliderChange2}
                probation={probation}
                answer1={answer1}
                answer2={answer2}
                answer3={answer3}
                slider2flag={slider2flag}
               />
             )}            
             {slider2flag === 1 &&(
              <Judging
                commentChange={this.commentChange}
                comment={comment}
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
            setInitialStagePage1={this.setInitialStagePage1}
          />
        )}
      </>
    );
  }
}

export default Page1;
