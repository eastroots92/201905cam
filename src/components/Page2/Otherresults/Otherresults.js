import React from 'react'
import styles from './Otherresults.module.css'

const Otherresults = ({
    selectedIndex,
    getdata,
    type,
    getAverage,
    filtering,
    mabuAvg,
    typename,
    typefilter
}) => {

  //구형 필터링 (유형)
    let avgResult = filtering(getdata,...typefilter[type])
    console.log(avgResult)

    //형량 평균
    let avgResultValue=getAverage(avgResult.map(d=>d.answer2))

    //집유 평균
    let avgProbation=0; 
    if( type==1 || type==3 ){
        avgProbation=getAverage(avgResult.map(d=>d.answer3))
    }

    //마부작침분석판결
    const mabu = mabuAvg[selectedIndex][type]

    return (
        <div className={styles.wrapper}>
            <div className={styles.result}>
                <div className={styles.subtitle}>사건{selectedIndex}에 대한 {typename[type]} 분석</div>
                <div className={styles.otherresult}>
                    시민 판사 평균 : {avgResultValue} &nbsp;
                    {avgProbation > 0 &&(
                        <>
                        집행유예: {avgProbation}
                        </>
                    )}
                </div>
                {type !== 3 &&(
                <div className={styles.otherresult}>
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


export default Otherresults;