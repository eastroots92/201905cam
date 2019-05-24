import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import styles from './Mygraph.module.css'

class Mygraph extends Component {
    constructor(props) {
        super(props)
        const{monthFormat,moneyFormat,type, myavgProbation,answer3,mabu}=this.props
        this.state = {
          options: {
            chart: {
                animations: {
                   enabled:false,
                },
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false,
                  },
            },
            grid:{
                show:false
            },
            markers: {
                size: 10,
                radius:10,
                hover: {
                    size:10
                  }
            },
            legend:{
                position: 'top',
                // itemMargin: {
                //     horizontal: 30,
                //     vertical: 5
                // },
                onItemClick: {
                    toggleDataSeries: false
                },
            },
            xaxis: {
                tickAmount: 5,
                min: 0,
                max: 60,
                labels: {
                    formatter: function(val) {
                        if(val===0){return '1개월'}
                        else return monthFormat(parseFloat(val))
                    }
                },
                tooltip: {
                    enabled:false,
                    // offsetY: -50
                },
                crosshairs: {
                    show: false,
                }
            },
            yaxis: {
                tickAmount:1,
                show:false,
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show:false,
                },
                tooltip:{
                    enable:false
                }
            },
            colors: ['#0099a8','#a18529', '#999'],
            tooltip:{
            },
          },
          options2: {
            chart: {
                animations: {
                    enabled:false,
                 },
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false,
                  },
            },
            grid:{
                show:false
            },
            markers: {
                size: 10,
                radius:10,
                hover: {
                    size:10
                  }
            },
            legend:{
                position: 'top',
                // itemMargin: {
                //     horizontal: 30,
                //     vertical: 5
                // },
                onItemClick: {
                    toggleDataSeries: false
                },
            },
            xaxis: {
                tickAmount: 3,
                min: 0,
                max: 30000000,
                labels: {
                    formatter: function(val) {
                        if(val===0){return '1백만원'}
                        else if(val===10000000){return '1천만원'}
                        else if(val===20000000){return '2천만원'}
                        else if(val===30000000){return '3천만원'}
                    }
                },
                tooltip: {
                    enabled:false,
                    // offsetY: -50
                },
                crosshairs: {
                    show: false,
                }
            },
            yaxis: {
                tickAmount:1,
                show:false,
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show:false,
                },
                tooltip:{
                    enable:false
                }
            },
            colors: ['#0099a8','#a18529', '#999'],
            tooltip:{
            },
          },
          series1: [   
        ],
        }
      }
      componentWillReceiveProps(props, state){
        const{monthFormat,moneyFormat,type, myavgProbation,answer3,mabu}=props
          this.setState({
              options:{
                tooltip:{
                    enabled:true,
                    intersect: false,
                    custom: function({series, seriesIndex, dataPointIndex, w}) {
                    if(type===1 || type===3){
                        let prob=[
                            monthFormat(answer3),monthFormat(myavgProbation),monthFormat(mabu[1])
                        ];
                        return '<div class="mytooltip">' +w.globals.seriesNames[seriesIndex]+': 징역 '+monthFormat(w.globals.seriesX[seriesIndex])+' 집행유예 '+prob[seriesIndex]+'</div>'     
                    }else{
                      return '<div class="mytooltip">' +w.globals.seriesNames[seriesIndex]+': 징역 '+monthFormat(w.globals.seriesX[seriesIndex])+'</div>'     
                    }
                    },
                },
              },
              options2:{
                tooltip:{
                    enabled:true,
                    custom: function({series, seriesIndex, dataPointIndex, w}) {
                        if(type===1 || type===3){
                            let prob=[
                                monthFormat(answer3),monthFormat(myavgProbation)
                            ];
                            return '<div class="mytooltip">' +w.globals.seriesNames[seriesIndex]+': 벌금 '+moneyFormat(w.globals.seriesX[seriesIndex])+' 집행유예 '+prob[seriesIndex]+'</div>'     
                        }else{
                            return '<div class="mytooltip">' +w.globals.seriesNames[seriesIndex]+': 벌금 '+moneyFormat(w.globals.seriesX[seriesIndex])+'</div>'     
                        }
                      },
                },
              }
          }) 
          if(props.type===3){
            this.setState({
                series1: [
                    {
                    name: "나",
                    data: [  
                      [props.answer2,0],
                    ],
                   },
                  {
                    name: "시민 판사",
                    data:[[props.myavgResultValue,0]],
                  },    
                ],
              })
          }else{
              this.setState({
            series1: [
                {
                name: "나",
                data: [  
                  [props.answer2,0],
                ],
               },
              {
                name: "시민 판사",
                data:[[props.myavgResultValue,0]],
              },
              {
                name: "실제 판결",
                data:[[props.mabu[0],0]]
              }    
            ],
          })
          }
        
      }
    render() {
        const {monthFormat,moneyFormat,myavgProbation,myavgResultValue,mabu,probation,type,answer1,answer2,answer3}=this.props
        return (
            <>
            <div className={styles.bar} id='mygraph'>
                {answer1 ===0 &&( 
                <Chart options={this.state.options} series={this.state.series1} type="scatter" height="150" />
                )}
               {answer1 ===1 &&( 
                <Chart options={this.state.options2} series={this.state.series1} type="scatter" height="150" />
                )}
            </div>
            </>
        );
    }
}

export default Mygraph;