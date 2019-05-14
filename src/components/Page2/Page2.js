import React, { Component } from 'react';
import axios from 'axios'
import {url} from '../const'
import styles from './Page2.module.css'
import Results from './Results'
import Totalresult from './Totalresult'
import Analysis from './Analysis'
import Nextgame from './Nextgame'
import Articles from './Articles'

class Page2 extends Component {
  state = {
      getdata:[]
  }

  componentDidMount() {
    const {selectedIndex} = this.props;
    axios.get(`${url}/${selectedIndex}`)
      .then(res => {
        const getdata = res.data;
        this.setState({
          getdata: getdata
        });
      })
  }

  
  render() {
    const { 
      criminals,
      selectedIndex,
      answer1,
      answer2,
      answer3,
      probation,
      datapost,
      setInitialStage
    } = this.props
    const {getdata}=this.state

    return (
      <>
      <div className={styles.wrapper}>
        <Results 
          selectedIndex={selectedIndex}
          answer1={answer1}
          answer2={answer2}
          answer3={answer3}
          probation={probation}
          getdata={getdata}
        />
        <Totalresult />
        <Analysis />
        <Nextgame />
        <Articles />
      </div>
      </>
    );
  }
}
export default Page2;