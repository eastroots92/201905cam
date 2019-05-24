import React from 'react'
import { monthFormat, moneyFormat} from '../../../utils'
import styles from './Myresult.module.css'
import Mygraph from '../Mygraph'

let today = new Date().toISOString().slice(0, 10).replace(/-/g,".");

const Myresult = ({
    criminals,
    selectedIndex,
    answer1,
    answer2,
    answer3,
    comment,
    probation,
    getdata,
    type,
    getAverage,
    filtering,
    mabuAvg,
    typename,
    typefilter
}) => {

    let myavgResult = filtering(getdata,...typefilter[type])
    let myavgResultValue=getAverage(myavgResult.map(d=>d.answer2))
    let myavgProbation=0; 
    if(probation===1){
        myavgProbation=getAverage(myavgResult.map(d=>d.answer3))
    }
    console.log(myavgResult)
    console.log(myavgResultValue)
    let value
    if(type<2){
        value=monthFormat(answer2)
    }
    else{ value=moneyFormat(answer2)}
    
    //마부작침분석판결
    const mabu = mabuAvg[selectedIndex][type]

    return (
        <div className={styles.wrapper}>
            <div className={styles.result}>
                <div className={styles.section}>
                    <div className={styles.title}>
                        대한민국법원<br/>
                        판  결</div>
                    <div className={styles.content}>
                        <ul>
                            <li className={styles.leftcon}>사&nbsp;&nbsp;&nbsp;건</li>
                            <li className={styles.wraptxt}>성폭력범죄의처벌등에관한특례법위반(카메라등이용촬영)</li>
                        </ul>
                        <ul>
                            <li  className={styles.leftcon}>피고인</li>
                            <li className={styles.rightcon}>{criminals[selectedIndex].criminal}</li>
                        </ul>
                        <ul>
                            <li  className={styles.leftcon}>변호인</li>
                            <li className={styles.rightcon}>담당변호사 {criminals[selectedIndex].criminal}</li>
                        </ul>
                        <ul>
                             <li  className={styles.leftcon}>판결선고</li>
                             <li className={styles.rightcon}>{today}</li> 
                       </ul>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.title}>주  문</div>
                        <div className={styles.myresult}>
                            피고인을 <span> {typename[type]}&nbsp;{value}</span>에 처한다.<br/>
                            {probation=== 1 &&(
                                <>
                                다만, 이 판결확정일부터 <span> {monthFormat(answer3)}</span>간 위 형의 집행을 유예한다.
                                </>
                            )} 
                        </div>
                                {/* <Mygraph
                                    answer1={answer1}
                                  answer2={answer2}
                                  answer3={answer3}
                                  myavgResultValue={myavgResultValue}
                                  myavgProbation={myavgProbation}
                                  mabu={mabu}
                                  type={type}
                                  probation={probation}
                                  monthFormat={monthFormat}
                                  moneyFormat={moneyFormat}
                                /> */}
                    </div>
                </div> 
                {comment !== '' &&(
                <div className={styles.section}>
                    <div className={styles.title}>이  유</div>
                    <div className={styles.reason}>
                        {comment}
                    </div>
                </div> 
                )}
        </div>
    );
};


export default Myresult;