import React, { Component } from 'react'
import styles from './App.module.css'
import { Navigation, Heading, Page0, Page1, Page2} from './components'
// import { createRGBcode, sampleintLessThan } from './utils'
const criminals=[
  { key:0, name:'0', 
    where:'지하철역 출구 계단', 
    who:'치마 입은 여성', 
    what:'치마 속 신체 부위', 
    how:'동영상으로 1회', 
    tool:'휴대전화', 
    imgurl:'data:image/jpeg;base64,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'  
  },
  { key:1, name:'1', 
    where:'지하철 환승통로 에스컬레이터', 
    who:'연령불상', what:'다리 부위', 
    how:'사진과 동영상으로 50회' , 
    tool:'휴대전화', 
    imgurl:'https://speckyboy.com/wp-content/uploads/2014/06/ironman.jpg'  
  },
  { key:2, name:'2', 
    where:'모텔', 
    who:'연인 관계인 여성', 
    what:'성관계 하는 장면', 
    how:'동의를 받지 않은 채' , 
    tool:'휴대전화', 
    imgurl:'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Mike-Mitchell-Bullseye.jpg'   },
  { key:3, name:'3', 
    where:'여성 화장실', 
    who:'화장실에 들어온 여성들', 
    what:'용변 보는 장면', 
    how:'몰래 설치해 놓은 뒤' , 
    tool:'소형 카메라', 
    imgurl:'http://cdn.collider.com/wp-content/uploads/Deadpool-Mike-Mitchell-Mondo-Marvel.jpg'  
  },
  { key:4, name:'4', 
    where:'자신의 거주지', 
    who:'여자친구', 
    what:'나체 사진', 
    how:'친구들과 함께 있는 메신저채팅방에 공유' , 
    tool:'휴대전화', 
    imgurl:'https://inveteratemediajunkies.files.wordpress.com/2014/04/marvel-portraits-doctor-strange-by-mike-mitchell.jpg?w=640'  
  },
]
class App extends Component {
  state = { 
    criminals: criminals, 
    selectedIndex: null,
    selectedSex:null,
    selectedAge:null
  }

  selectSex = (event) => {
    const { name } = event.target
    this.setState({selectedSex:Number(name)})
  }
  
  selectAge = (event) => {
    const { name } = event.target
    this.setState({selectedAge:Number(name)})
  }

  selectCriminal = (event) => {
    const { name } = event.target
    this.setState({selectedIndex:Number(name)})
  }

  setNextStage = () => {
    this.setState({
      criminals:criminals,  
      selectedIndex: null,
    })
  }

  setInitialStage = () => {
    this.setState({
      criminals:criminals, 
      selectedIndex: null,
    })
  } 

  render() {
    const { criminals, selectedIndex, selectedSex, selectedAge }=this.state
    return (
      <div className={styles.wrapper}>
        <Navigation />
        <Heading />
        {selectedIndex == null && (
        <Page0 
            selectCriminal={this.selectCriminal}
            criminals={criminals} 
            selectedIndex={selectedIndex}
            selectedSex={selectedSex}
            selectedAge={selectedAge}
            selectSex={this.selectSex}
            selectAge={this.selectAge}
        />
        )}
        {selectedIndex!== null && (
          <Page1
            criminals={criminals}
            selectedIndex={selectedIndex}
            setInitialStage={this.setInitialStage}
          />     
        )}
      </div>
    )
  }
}

export default App
