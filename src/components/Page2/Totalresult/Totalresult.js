import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import styles from './Totalresult.module.css'
// import Chart from 'react-apexcharts'

class Totalresult extends Component {
    constructor(props){
        super(props)
        const {selectedIndex, mabuCount } =this.props
        this.state={
            options: {
                chart: {
                  stacked: true,
                  stackType: '100%',
                  toolbar: {
                    show: false
                  }
                },
                plotOptions: {
                  bar: {
                    horizontal: true,
                  },
                },
                dataLabels: {
                  style: {
                    fontSize: '18px',
                    fontFamily: 'hgg, snas-serif',
                  },
                  dropShadow: {
                    enabled: true,
                  }
                },
                stroke: {
                  width: 0,
                },
                xaxis: {
                  show:false,
                  showAlways: false,
                  labels: {
                    show: false
                  },
                  axisBorder: {
                    show: false
                  },
                  axisTicks:{
                    show:false
                  }
                },
                yaxis: {
                  show:false,
                  showAlways: false,
                  labels: {
                    show: false
                  },
                  axisBorder: {
                    show: false
                  },
                  axisTicks:{
                    show:false
                  }
                },
                colors: ['#a18529', '#cab44b', '#0099a8' ,'#1dcad3'],
                fill: {
                  colors: ['#a18529', '#cab44b', '#0099a8' ,'#1dcad3'],
                  opacity: 1,
                },
        
                legend: {
                  position: 'bottom',
                  horizontalAlign: 'center',
                  onItemClick: {
                    toggleDataSeries: false
                  },
                },
                tooltip: {
                  enabled: true,
                  // custom: undefined,
                  style: {
                    fontSize: '14px',
                    fontFamily: 'hgg, sans-serif'
                  },
                  onDatasetHover: {
                      highlightDataSeries: false,
                  },
                  x: {
                      show: false,
                  },
                  y: {
                      formatter: function (y) {
                        if(typeof y !== "undefined") {
                          return  y.toFixed(0) + "건";
                        }
                        return y;                   
                      },
                  },
  
              }
              },
              series1: [{
                name: '징역형',
                data: []
              }, {
                name: '징역형 집행유예',
                data: []
              }, {
                name: '벌금형',
                data: []
              }, {
                name: '벌금형 집행유예',
                data: []
              }],

              series2: [{
                name: '징역형',
                data: [mabuCount[selectedIndex][0]]
              }, {
                name: '징역형 집행유예',
                data: [mabuCount[selectedIndex][1]]
              }, {
                name: '벌금형',
                data: [mabuCount[selectedIndex][2]]
              }, {
                name: '벌금형 집행유예',
                data: [mabuCount[selectedIndex][3]]
              }],
        }
    }


    componentWillReceiveProps(props, state){
      const{ getdata, typefilter, filtering, getAverage} =props
      if(getdata!==null){
        const type0count=filtering(getdata,...typefilter[0])
        const type0avg=getAverage(type0count.map(d=>d.answer2))
    
        const type1count=filtering(getdata,...typefilter[1])
        const type1avg=getAverage(type1count.map(d=>d.answer2))
        const type1avgprobation=getAverage(type1count.map(d=>d.answer3))
    
        const type2count=filtering(getdata,...typefilter[2])
        const type2avg=getAverage(type2count.map(d=>d.answer2))
    
        const type3count=filtering(getdata,...typefilter[3])
        const type3avg=getAverage(type3count.map(d=>d.answer2))
        const type3avgprobation=getAverage(type3count.map(d=>d.answer3))
      
      this.setState({
        series1:[{
          name: '징역형',
          data: [type0count.length]
        }, {
          name: '징역형 집행유예',
          data: [type1count.length]
        }, {
          name: '벌금형',
          data: [type2count.length]
        }, {
          name: '벌금형 집행유예',
          data: [type3count.length]
        }]
      })
    }
    }
    render() {
        const {
            type,
            typefilter,
            filtering,
            getAverage,
            selectedIndex,
            mabuCount,
            mabuAvg,
            getdata,
            criminals,
        }=this.props

    return (
        <div className={styles.wrapper}>
            <div className={styles.subtitle}>이 사건에 대한 다른 '시민 판사'들의 구형은?</div>
            <div id="chart">
            <p className={styles.total}>총 {getdata.length}건의 판결</p>
            <Chart options={this.state.options} series={this.state.series1} type="bar" height="120" />
            </div>
            <div className={styles.count}>
                {/* <p>징역형: {type0count.length}건</p><br/>
                <p>징역형 집행유예: {type1count.length}건</p><br/>
                <p>벌금형: {type2count.length}건</p><br/>
                <p>벌금형 집행유예: {type3count.length}건</p> */}
            </div>
            <div className={styles.subtitle}>'{criminals[selectedIndex].summary}'에 대한 실제 판결은?</div>
            <p className={styles.total}>2018년 서울지역 5개 법원 판결 {mabuCount[selectedIndex][4]}건</p>
            <Chart options={this.state.options} series={this.state.series2} type="bar" height="120" />
            {/* <div className={styles.count}>
                <p>2018년 서울지역 5개 법원 판결 {mabuCount[selectedIndex][4]}건</p><br/>
                <p>징역형: {mabuCount[selectedIndex][0]}건</p><br/>
                <p>징역형 집행유예: {mabuCount[selectedIndex][1]}건</p><br/>
                <p>벌금형: {mabuCount[selectedIndex][2]}건</p><br/>
                <p>벌금형 집행유예: {mabuCount[selectedIndex][3]}건</p>         
            </div> */}
            
        </div>
        )
    }
}

export default Totalresult;
