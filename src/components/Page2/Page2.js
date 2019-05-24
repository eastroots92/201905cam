import React, { Component } from 'react';
import axios from 'axios'
import Chart from 'react-apexcharts'
import {url} from '../const'
import { getAverage, filtering } from '../../utils'
import head from '../../assets/img/pang.png'
import styles from './Page2.module.css'
import Myresult from './Myresult'
import Totalresult from './Totalresult'
import Nextgame from './Nextgame'
import Articles from './Articles'


// const typename=['징역형','징역형 집행유예','벌금형','벌금형 집행유예']
const typename=['징역','징역','벌금','벌금']
const typefilter=[[0,0],[0,1],[1,0],[1,1]]
const alltype=[0,1,2,3]
//1차[사건번호] 2차[타입] 3차[형량,집유]
const mabuAvg= [
  [[8],[6.3,24],[2870968],null],
  [[16],[10,25.7],[5416667],null],
  [[9],[7.4,23.3],[4625000],null],
  [[9.7], [7.4,18],[4571429],null],
  [[12],[7.5,23],[4692308],null]
]
//1차[사건번호] 2차[타입0,1,2,3,전체, 선고유예]
const mabuCount=[
  [4,8,31,0,43,1],
  [3,7,12,0,22],
  [6,18,4,0,28],
  [6,10,7,0,23],
  [7,23,13,0,43]
]

class Page2 extends Component {
  constructor(){
    super()
    this.state = {
      mabuAvg:mabuAvg,
      mabuCount:mabuCount,
      typename:typename,
      typefilter:typefilter,
      alltype:[0,1,2,3],
      getdata:[],
  
    }
  }

  setInitialStagePage2 = () => {
    this.props.setInitialStagePage1()
    this.setState({
      alltype:[0,1,2,3],
      getdata:[],
    })
    this.props.scrollToBottom()
  } 
  componentDidMount() {
    const {selectedIndex, type} = this.props
    const {alltype} =this.state
    alltype.splice(type,1)

    axios.get(`${url}/${selectedIndex}`)
      .then(res => {
        const getdata = res.data
        this.setState({
          getdata: getdata
        })
      }).catch( error => { console.log('failed', error) })
  }

  
  render() {
    const { 
      type,
      criminals,
      selectedIndex,
      answer1,
      answer2,
      answer3,
      probation,
      comment,
    } = this.props
    const {
      getdata,
      mabuAvg,
      mabuCount,
      typename,
      typefilter   
    } = this.state

    return (
      <>
      <div className={styles.container}>
       <div className={styles.head}><img src={head}/></div>
      <div className={styles.wrapper}>
     
        {/* <div className={styles.subtitle}>내가 선택한 형벌 분석 보기</div> */}
        <Myresult 
          type={type}
          criminals={criminals}
          selectedIndex={selectedIndex}
          answer1={answer1}
          answer2={answer2}
          answer3={answer3}
          comment={comment}
          probation={probation}
          getdata={getdata}
          getAverage={getAverage}
          filtering={filtering}
          mabuAvg={mabuAvg}
          typename={typename}
          typefilter={typefilter}
        />
        <Totalresult 
          criminals={criminals}
          getdata={getdata}
          typefilter={typefilter}
          filtering={filtering}
          getAverage={getAverage}
          mabuAvg={mabuAvg}
          type={type}
          selectedIndex={selectedIndex}   
          mabuCount={mabuCount} 
        />
        <Nextgame 
          setInitialStagePage2={this.setInitialStagePage2}
        />
        <Articles />
      <div className={styles.footer}>
          <a href="http://news.sbs.co.kr/news/newsPlusList.do?themeId=10000000114">
             <p className={styles.team}>SBS 데이터저널리즘팀 마부작침</p>
          </a>
            <p className={styles.credit}>
            심영구 기자 (so5what@sbs.co.kr)<br/>
            김학휘 기자 (hwi@sbs.co.kr)<br/>
            안혜민 기자·분석가 (hyeminan@sbs.co.kr)<br/>
            조애리 개발자·디자이너 (dofl5576@gmail.com)<br/>
            인턴: 박지영 </p>
        </div>
       </div>
      </div>
      </>
    );
  }
}
export default Page2;