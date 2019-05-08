import React, { Component } from 'react'
import styles from './App.module.css'
import { Game, Heading, Dialog } from './components'
import { createRGBcode, sampleintLessThan } from './utils'
class App extends Component {
// 스테이트 만드는 원래 문법
  // constructor(props){
  //   super(props)
  //   this.state={score:0}
  // }
// 클래스필드라는 신문법
  state = { 
    score:0,
    answers: [
      { key:0, color: createRGBcode() },
      { key:1, color: createRGBcode() },
      { key:2, color: createRGBcode() },
    ], 
    selectedIndex: null,
    correctAnswerIndex: sampleintLessThan(3),
  }

  selectAnswer = (event) => {
    const { correctAnswerIndex } =this.state
    const { name } = event.target
    if(Number(name)===correctAnswerIndex){
      //스테이트를 업데이트할때 이전 스테이트값을 참고해야할때 함수로 전달
      this.setState(state=>({
        score: state.score +1,
        selectedIndex: Number(name),
      }))
    }else {
      this.setState({selectedIndex:Number(name)})
    }
  }

  setNextStage = () => {
    this.setState({
      answers: [
        { key:0, color: createRGBcode() },
        { key:1, color: createRGBcode() },
        { key:2, color: createRGBcode() },
      ], 
      selectedIndex: null,
      correctAnswerIndex: sampleintLessThan(3),
    })
  }

  setInitialStage = () => {
    this.setState({
      answers: [
        { key:0, color: createRGBcode() },
        { key:1, color: createRGBcode() },
        { key:2, color: createRGBcode() },
      ], 
      selectedIndex: null,
      correctAnswerIndex: sampleintLessThan(3),
      score: 0,
    })
  } 

  render() {
    // 스테이트 읽어오는법
    // this.state.score
    // 디스트럭쳐링으로 줄이는법=분해대입
    const { answers, score, selectedIndex, correctAnswerIndex}=this.state
    return (
      <div className={styles.wrapper}>
        <Heading />
        <Game 
            answers={answers} 
            score={score}
            selectAnswer={this.selectAnswer}
            correctAnswerIndex={correctAnswerIndex}
            selectedIndex={selectedIndex}
        />
        {/* selectedIndex가 널이 아닐때만 조건부 렌더, 참이면 && 뒤값 반환 falsy value */} 
        {selectedIndex!== null && (
          <Dialog 
            score={score}
            correctAnswerIndex={correctAnswerIndex}
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
