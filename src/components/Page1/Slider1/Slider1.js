import React from 'react';
import styles from './Slider1.module.css'
import { monthFormat, moneyFormat } from '../../../utils'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

const Slider1 = ({
    answer1,answer2,sliderChange1,
}) => {
    return (
        <>
        <div className={styles.text}>형량을 선택하세요</div>
        <div className={styles.subtext}>슬라이드를 이동해 형량을 정할 수 있습니다</div>
        <div className={styles.wrapper}>
                {answer1 === 0 && (
                    <>
                    <Slider
                    min={1}
                    max={60}
                    step={1}
                    format={monthFormat}
                    value={answer2}
                    onChange={sliderChange1}
                    />
                    <div className='value'>{monthFormat(answer2)}</div>
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
                    onChange={sliderChange1}
                    />
                    <div className='value'>{moneyFormat(answer2)}</div>
                    </>
                )}
        </div>
        </>
    );
};

export default Slider1;