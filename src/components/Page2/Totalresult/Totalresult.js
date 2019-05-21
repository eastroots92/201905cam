import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import styles from './Totalresult.module.css'
// import Chart from 'react-apexcharts'

class Totalresult extends Component {
    constructor(){
        super()
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
                  dropShadow: {
                    enabled: true
                  }
                },
                stroke: {
                  width: 0,
                },
                xaxis: {
                  // categories: [''],
                  labels: {
                    show: false
                  },
                  axisBorder: {
                    show: false
                  },
                  axisTicks: {
                    show: false
                  }
                },
                fill: {
                  opacity: 1,
                  type: 'gradient',
                  gradient: {
                    shade: 'dark',
                    type: "vertical",
                    shadeIntensity: 0.35,
                    gradientToColors: undefined,
                    inverseColors: false,
                    opacityFrom: 0.85,
                    opacityTo: 0.85,
                    stops: [90, 0, 100]
                  },
                },
        
                legend: {
                  position: 'bottom',
                  horizontalAlign: 'right',
                }
              },
              series: [{
                name: '징역형',
                data: [32]
              }, {
                name: '징역형 집행유예',
                data: [41]
              }, {
                name: '벌금형',
                data: [12]
              }, {
                name: '벌금형 집행유예',
                data: [65]
              }]
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
         // const mabu = mabuAvg[selectedIndex][type]

    return (
        <div className={styles.wrapper}>
            <div className={styles.subtitle}>이 사건에 대한 다른 '시민 판사'들의 구형은?</div>
            <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" height="350" />
            </div>
            <div className={styles.count}>
                <p>총 {getdata.length}건의 판결 중</p><br/>
                <p>징역형: {type0count.length}건</p><br/>
                <p>징역형 집행유예: {type1count.length}건</p><br/>
                <p>벌금형: {type2count.length}건</p><br/>
                <p>벌금형 집행유예: {type3count.length}건</p>
            </div>
            <div className={styles.subtitle}>'{criminals[selectedIndex].summary}'에 대한 실제 판결은?</div>
            <div className={styles.count}>
                <p>2018년 서울지역 5개 법원 판결 {mabuCount[selectedIndex][4]}건</p><br/>
                <p>징역형: {mabuCount[selectedIndex][0]}건</p><br/>
                <p>징역형 집행유예: {mabuCount[selectedIndex][1]}건</p><br/>
                <p>벌금형: {mabuCount[selectedIndex][2]}건</p><br/>
                <p>벌금형 집행유예: {mabuCount[selectedIndex][3]}건</p>         
            </div>
            
        </div>
        )
    }
}

export default Totalresult;
