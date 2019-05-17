import React from 'react'
import styles from './Myresult.module.css'

const Myresult = ({
    selectedIndex,
    answer1,
    answer2,
    answer3,
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

    //마부작침분석판결
    const mabu = mabuAvg[selectedIndex][type]

    return (
        <div className={styles.wrapper}>
            <div className={styles.result}>
                <div className={styles.subtitle}>사건{selectedIndex}에 대한 {typename[type]} 분석</div>
                <div className={styles.myresult}>
                    나의 판결 : {answer2} &nbsp;
                    {answer3 > 0 &&(
                        <>
                        집행유예: {answer3}
                        </>
                    )} 
                </div>
                <div className={styles.myresult}>
                    시민 판사 평균 : {myavgResultValue} &nbsp;
                    {answer3 > 0 &&(
                        <>
                        집행유예: {myavgProbation}
                        </>
                    )}
                </div>
                {type !== 3 &&(
                <div className={styles.myresult}>
                    마부작침 분석 평균: {mabu[0]} &nbsp;
                    {type ===1 &&(
                        <>
                        집행유예: {mabu[1]}
                        </>
                    )}
                </div>
                )}
            </div>
        </div>
    );
};


export default Myresult;