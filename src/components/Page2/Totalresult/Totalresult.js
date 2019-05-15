import React from 'react';
import styles from './Totalresult.module.css'

const Totalresult = ({
    type,
    typefilter,
    filtering,
    selectedIndex,
    mabuCount,
    getdata,
}) => {
    const type0count=filtering(getdata,...typefilter[0])
    const type1count=filtering(getdata,...typefilter[1])
    const type2count=filtering(getdata,...typefilter[2])
    const type3count=filtering(getdata,...typefilter[3])
    return (
        <div className={styles.wrapper}>
            <div>사건{selectedIndex}에 대한 실제 구형은?</div>
            <div className={styles.count}>
                <p>총 {mabuCount[selectedIndex][4]}건의 판결 중</p><br/>
                <p>징역형: {mabuCount[selectedIndex][0]}건</p><br/>
                <p>징역형 집행유예: {mabuCount[selectedIndex][1]}건</p><br/>
                <p>벌금형: {mabuCount[selectedIndex][2]}건</p><br/>
                <p>벌금형 집행유예: {mabuCount[selectedIndex][3]}건</p><br/>           
            </div>
            <div>사건{selectedIndex}에 대한 시민판사들의 구형은?</div>
            <div className={styles.count}>
                <p>총 {getdata.length}건의 판결 중</p><br/>
                <p>징역형: {type0count.length}건</p><br/>
                <p>징역형 집행유예: {type1count.length}건</p><br/>
                <p>벌금형: {type2count.length}건</p><br/>
                <p>벌금형 집행유예: {type3count.length}건</p><br/> 
            </div>
        </div>
    );
};

export default Totalresult;