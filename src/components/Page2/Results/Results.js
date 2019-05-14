import React from 'react'
import styles from './Results.module.css'
import { getAverage } from '../../../utils'

const Results = ({
    selectedIndex,
    answer1,
    answer2,
    answer3,
    probation,
    getdata
}) => {
    let myPenalty;
        if(answer1===0 && probation === 0){
            myPenalty=`징역형`
        }
        else if(answer1===0 && probation === 1){
            myPenalty= `징역형 집행유예`
        }
        else if(answer1===1 && probation === 0){
            myPenalty= `벌금형`
        }
        else if(answer1===1 && probation === 1){
            myPenalty= `벌금형 집행유예`
        }

    //내가선택한 구형 필터링 (유형)
    const avgResult = getdata.filter(d => d.answer1==answer1 && d.sex==probation)
    console.log(avgResult)

    //형량 평균
    const avgResultValue=getAverage(avgResult.map(d=>d.answer2))
    console.log(avgResultValue)

    //집유 평균
    let avgProbation=0; 
    if(probation==1){
        avgProbation=getAverage(avgResult.map(d=>d.answer3))
        console.log(avgProbation)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.result}>
                사건{selectedIndex}에 대한 {myPenalty} 분석
                <div className={styles.myresult}>
                    나의 판결 : {answer2}
                    {answer3 > 0 &&(
                        <>
                        집행유예: {answer3}
                        </>
                    )} 
                </div>
                <div className={styles.avgresult}>
                    시민 판사 평균 : {avgResultValue}
                    {answer3 > 0 &&(
                        <>
                        집행유예: {avgProbation}
                        </>
                    )}
                </div>
                <div className={styles.maburesult}>
                    마부작침 분석 판결: 
                </div>
            </div>
        </div>
    );
};


export default Results;