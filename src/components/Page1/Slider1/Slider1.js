import React from 'react';
import styles from './Slider1.module.css'
import { monthFormat, moneyFormat } from '../../../utils'
import Slider from 'react-rangeslider'
// import './Slider1.module.css'
// import 'react-rangeslider/lib/index.css'

const Slider1 = ({
    answer1,answer2,sliderChange1,scrolltoPrb
}) => {
    return (
        <>
        <div className={styles.container}>
        <div className={styles.title}>형량을 선택하세요</div>
        <div className={styles.subtitle}>슬라이드를 이동해 형량을 정할 수 있습니다</div>
        {/* <div className={styles.subtext}></div> */}
        <div className={styles.wrapper}>
                {answer1 === 0 && (
                    <>
                    <Slider
                    min={1}
                    max={60}
                    step={1}
                    format={monthFormat}
                    value={answer2}
                    labels={{ 1:'1개월', 12: '1년', 24: '2년', 36: '3년', 48:'4년', 60:'5년'}}
                    onChange={sliderChange1}       
                    onChangeComplete={scrolltoPrb}
                    />
                    <div className={styles.value}>{monthFormat(answer2)}</div>
                    </>
                )}
                {answer1 === 1 && (
                    <>
                    <Slider
                    min={1000000}
                    max={30000000}
                    step={1000000}
                    format={moneyFormat}
                    value={answer2}
                    labels={{ 1000000:'1백만 원', 10000000: '1천만 원', 20000000: '2천만 원', 30000000: '3천만 원'}}
                    onChange={sliderChange1}
                    onChangeComplete={scrolltoPrb}
                    />
                    <div className={styles.value}>{moneyFormat(answer2)}</div>
                    </>
                )}
        </div>
        </div>
        </>
    );
};

export default Slider1;