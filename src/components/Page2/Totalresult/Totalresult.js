import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import styles from './Totalresult.module.css'
import {moneyFormat,monthFormat} from '../../../utils'
// import Chart from 'react-apexcharts'

class Totalresult extends Component {
    constructor(props){
        super(props)
        let width=window.innerWidth/2
        const {selectedIndex, mabuCount, mabuAvg, type } =this.props
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
                  },
                  dropShadow: {
                    enabled: true,
                  },
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
                  onDatasetHover: {
                      highlightDataSeries: false,
                  },
                  x: {
                      show: false,
                  }, 
                  fixed: {
                    enabled: true,
                    position: 'topright',
                    offsetX:0,
                    offsetY: -30,
                }, 
              }
              },
              options2: {
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
                  shared:false,
                  // custom: undefined,
                  fixed: {
                    enabled: true,
                    position: 'topright',
                    offsetX:0,
                    offsetY: -30,
                },
                  onDatasetHover: {
                      highlightDataSeries: false,
                  },
                  x: {
                      show: false,
                  },
                //   fixed: {
                //     enabled: true,
                //     position: 'topRight',
                //     offsetX: 0,
                //     offsetY: 0,
                // },
                  custom: function({series, seriesIndex, dataPointIndex, w}) {
                        if(typeof series !== "undefined") {
                            if (seriesIndex===0){
                            return '<div class="bartooltip">' +
                            '<div ><span class="tooltiptitle">' + w.globals.seriesNames[seriesIndex] +': </span>'+ series[seriesIndex][dataPointIndex] + '건</div>' +
                            '<div> <span class="tooltipsub">평균형량: </span>' + monthFormat(mabuAvg[selectedIndex][seriesIndex]) + '</div>'+
                            '</div>'
                            }
                            else if (seriesIndex===1){
                              return '<div class="bartooltip">' +
                              '<div><span class="tooltiptitle">' + w.globals.seriesNames[seriesIndex] +': </span>'+ series[seriesIndex][dataPointIndex] + '건</div>' +
                              '<div><span class="tooltipsub">평균형량: 징역 </span>' + monthFormat(mabuAvg[selectedIndex][seriesIndex][0]) + '</div>'+
                              '<div><span class="tooltipsub">집행유예 </span>' + monthFormat(mabuAvg[selectedIndex][seriesIndex][1]) + '</div>'+
                              '</div>'
                              }
                            else if (seriesIndex===2){
                              return '<div class="bartooltip">' +
                              '<div ><span class="tooltiptitle">' + w.globals.seriesNames[seriesIndex] +': </span>'+ series[seriesIndex][dataPointIndex] + '건</div>' +
                              '<div> <span class="tooltipsub">평균형량: </span>' + moneyFormat(mabuAvg[selectedIndex][seriesIndex]) + '</div>'+
                              '</div>'
                                }
                           else if (seriesIndex===3){
                                  return
                                }           
                        }                
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
        }],
        options:{
          tooltip: {
            custom: function({series, seriesIndex, dataPointIndex, w}) {
        
              if (seriesIndex===0){
                return '<div class="bartooltip">' +
                '<div ><span class="tooltiptitle">' + w.globals.seriesNames[seriesIndex] +': </span>'+ series[seriesIndex][dataPointIndex] + '건</div>' +
                '<div> <span class="tooltipsub">평균형량: </span>' + monthFormat(type0avg.toFixed(1)) + '</div>'+
                '</div>'
              }
              else if (seriesIndex===1){
                return '<div class="bartooltip">' +
                '<div ><span class="tooltiptitle">' + w.globals.seriesNames[seriesIndex] +': </span>'+ series[seriesIndex][dataPointIndex] + '건</div>' +
                '<div> <span class="tooltipsub">평균형량: 징역 </span>' + monthFormat(type1avg.toFixed(1)) + '</div>'+
                '<div><span class="tooltipsub">집행유예 </span>' + monthFormat(type1avgprobation.toFixed(1)) + '</div>'+
                '</div>'
              }
              else if (seriesIndex===2){
                return '<div class="bartooltip">' +
                '<div ><span class="tooltiptitle">' + w.globals.seriesNames[seriesIndex] +': </span>'+ series[seriesIndex][dataPointIndex] + '건</div>' +
                '<div> <span class="tooltipsub">평균형량: </span>' + moneyFormat(type2avg.toFixed(0)) + '</div>'+
                '</div>'
              }
              else if (seriesIndex===3){
                return '<div class="bartooltip">' +
                '<div ><span class="tooltiptitle">' + w.globals.seriesNames[seriesIndex] +': </span>'+ series[seriesIndex][dataPointIndex] + '건</div>' +
                '<div> <span class="tooltipsub">평균형량: 벌금 </span>' + moneyFormat(type3avg.toFixed(0)) + '</div>'+
                '<div><span class="tooltipsub">집행유예 </span>' + monthFormat(type3avgprobation.toFixed(1)) + '</div>'+
                '</div>'
              }

            }
          },
        }
      })
    }
    }
    render() {
        const {
            selectedIndex,
            mabuCount,
            getdata,
            criminals,
        }=this.props

    return (
        <div className={styles.wrapper}>
            <div className={styles.siminchart}>
              <div className={styles.subtitle}>이 사건에 대한 다른 '시민 판사'들의 판단은?</div>  
              <p className={styles.total}>총 <span> {getdata.length}</span>건의 판결</p>
              <Chart options={this.state.options} series={this.state.series1} type="bar" height="150"/>
            </div>
            <div className={styles.mabuchart}>
              <div className={styles.subtitle}>'{criminals[selectedIndex].summary}'에 대한 실제 판결은?</div>
              <p className={styles.total}>2018년 서울지역 5개 법원 1심 판결 <span> {mabuCount[selectedIndex][4]}</span>건</p>
              <Chart options={this.state.options2} series={this.state.series2} type="bar" height="150" />
            </div>
        </div>
        )
    }
}

export default Totalresult;
