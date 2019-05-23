import React, { Component } from 'react'
import styles from './App.module.css'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Navigation, Heading, Page0, Page1} from './components'
// import { createRGBcode, sampleintLessThan } from './utils'
const criminals=[
  { key:0, name:'0',
    criminal:'A',
    script:
    `<span>지하철역 출구 계단</span>에서 
    <span>치마 입은 여성</span> 뒤를 따라 올라가면서 
    자신의 <span>휴대전화</span>를 이용해 
    여성의 치마 속 <span>신체 부위</span>를 
    <span>동영상으로 1회</span> 촬영했습니다.`,
    summary:
    `여성 신체부위
    1회 촬영`,
    law:
    `※ 성폭력처벌법 제14조(카메라 등을 이용한 촬영) 제1항 위반으로 
    법정형은 ‘5년 이하의 징역 또는 3천만 원 이하의 벌금’입니다.`,
    imgurl:'http://mabu.newscloud.sbs.co.kr/2019img/img/a0.png',
    imgurlc:'http://mabu.newscloud.sbs.co.kr/2019img/img/a.png',  
  },
  { key:1, name:'1', 
    criminal:'B',
    script:
    `<span>지하철 환승통로 에스컬레이터</span>를 타고가며 
    자신의 <span>휴대전화</span>로 앞서 가는 여성의 <span>다리 부위</span>를 찍는 등 
    <span>50회에 걸쳐 사진과 동영상</span>을 촬영했습니다.`,
    summary:
    `여성 신체부위
    50회 촬영`,
    law:
    `※ 성폭력처벌법 제14조(카메라 등을 이용한 촬영) 제1항 위반으로 
    법정형은 ‘5년 이하의 징역 또는 3천만 원 이하의 벌금’입니다.`,
    imgurl:'http://mabu.newscloud.sbs.co.kr/2019img/img/b0.png',
    imgurlc:'http://mabu.newscloud.sbs.co.kr/2019img/img/b.png',   
  },
  { key:2, name:'2',
    criminal:'C',
    script:
    `<span>연인</span> 관계인 여성과 <span>모텔</span>에 들어간 뒤 
    자신과 여성이 <span>성관계 하는 장면</span>을 
    여성의 동의를 받지 않은 채 
    몰래 자신의 <span>휴대전화</span>로 촬영했습니다.`,
    summary:
    `성관계 동영상
    몰래 촬영`, 
    law:
    `※ 성폭력처벌법 제14조(카메라 등을 이용한 촬영) 제1항 위반으로 
    법정형은 ‘5년 이하의 징역 또는 3천만 원 이하의 벌금’입니다.`,
    imgurl:'http://mabu.newscloud.sbs.co.kr/2019img/img/c0.png',
    imgurlc:'http://mabu.newscloud.sbs.co.kr/2019img/img/c.png', 
  },
  { key:3, name:'3', 
    criminal:'D',
    script:
    `<span>여성 화장실</span>에 
    <span>소형 카메라</span>를 몰래 설치해 놓은 뒤 
    그 화장실에 들어온 여성들의 
    <span>용변 보는 장면</span>을 몰래 촬영했습니다. `,
    summary:
    `소형 카메라로
    몰래 촬영`,
    law:
    `※ 성폭력처벌법 제14조(카메라 등을 이용한 촬영) 제1항 위반으로 
    법정형은 ‘5년 이하의 징역 또는 3천만 원 이하의 벌금’입니다.`,
    imgurl:'http://mabu.newscloud.sbs.co.kr/2019img/img/d0.png',
    imgurlc:'http://mabu.newscloud.sbs.co.kr/2019img/img/d.png',    
  },
  { key:4, name:'4', 
    criminal:'E',
    script:
    `<span>자신의 집</span>에서 
    <span>여자 친구</span>의 동의를 받지 않은 채 
    몰래 <span>나체 사진</span>을 촬영한 뒤 
    그 사진을 친구들과 함께 있는 메신저 <span>단체 채팅방에 공유</span>했습니다.`,
    summary:
    `불법 촬영물
    유포`,
    law:
    `※ 성폭력처벌법 제14조(카메라 등을 이용한 촬영) 제1항, 제2항 위반으로 
    법정형은 ‘5년 이하의 징역 또는 3천만 원 이하의 벌금’입니다.`,
    imgurl:'http://mabu.newscloud.sbs.co.kr/2019img/img/e0.png',
    imgurlc:'http://mabu.newscloud.sbs.co.kr/2019img/img/e.png',  
  },
]
class App extends Component {
  state = { 
    criminals: criminals, 
    selectedIndex: null,
    selectedSex:null,
    selectedAge:null
  }
  scrolltop = () => {
    scroll.scrollToTop({
      duration:1000,
      delay:0,
      smooth:'easeInOutCubic'
    });
  }
  startscroll = () => {
    scroller.scrollTo('intro', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutCubic'
    })
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
    scroll.scrollToTop({
      duration: 0,
      delay: 0,
    })
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
        {selectedIndex == null && (
        <Page0 
            selectCriminal={this.selectCriminal}
            criminals={criminals} 
            selectedIndex={selectedIndex}
            selectedSex={selectedSex}
            selectedAge={selectedAge}
            selectSex={this.selectSex}
            selectAge={this.selectAge}
            startscroll={this.startscroll}
        />
        )}
        {selectedIndex !== null && (
          <Page1
            criminals={criminals}
            selectedIndex={selectedIndex}
            setInitialStage={this.setInitialStage}
            selectedSex={selectedSex}
            selectedAge={selectedAge}
            scrolltop={this.scrolltop}
            startscroll={this.startscroll}
          />     
        )}
      </div>
    )
  }
}

export default App
