import React, { Component } from 'react';
import styles from './Answer2.module.css'
import classnames from 'classnames/bind'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
const cx = classnames.bind(styles)



class Answer2 extends Component {

    render() {
        const {answer1,answer2,answer3,probation,selectProbation, sliderChange1,sliderChange2}=this.props;
//레인지슬라이더 드래그 끝나면 등장하도록 
        return (
            <>
            <p>형량을 얼마나 구형할까요?</p>
            <div className={styles.wrapper}>
                {answer1 === 0 && (
                    <>
                    <Slider
                    min={1}
                    max={60}
                    step={1}
                    value={answer2}
                    onChange={sliderChange1}
                    />
                    <div className='value'>{answer2}월</div>
                    </>
                )}
                {answer1 === 1 && (
                    <>
                    <Slider
                    min={100}
                    max={3000}
                    step={100}
                    value={answer2}
                    onChange={sliderChange1}
                    />
                    <div className='value'>{answer2}만원</div>
                    </>
                )}
           
                <p> 형법 제52조(집행유예의 요건) 제1항에 따라 3년 이하의 징역이나 금고 또는 500만 원 이하의 벌금형을 선고할 경우 1년 이상 5년 이하의 기간 형의 집행을 유예할 수 있습니다.
                    <br/>집행유예기간을 주시겠습니까?
                </p>
                 <div className={styles.btnwrapper}>
                    <button 
                        type="button" 
                        className={cx('button',{selected: probation === 0})} 
                        onClick={selectProbation}
                        name='0'>
                        예
                    </button>
                    <button
                        type="button" 
                        className={cx('button',{selected:probation === 1})} 
                        onClick={selectProbation}
                        name='1'>
                        아니오
                    </button>
                </div>
                {probation === 0 && (
                    <>
                    <p>집행유예를 얼마나 구형할까요?</p>
                    <Slider
                        min={1}
                        max={60}
                        step={1}
                        value={answer3}
                        onChange={sliderChange2}
                        />
                        <div className='value'>{answer3}월</div>
                    </>
                )}            
            </div>
            </>
        );
    }
}

export default Answer2;