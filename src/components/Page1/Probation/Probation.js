import React, { Component } from 'react';
import styles from './Probation.module.css'
import { monthFormat, moneyFormat } from '../../../utils'
import classnames from 'classnames/bind'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
const cx = classnames.bind(styles)



class Probation extends Component {

    render() {
        const {answer3, probation,slider1flag,selectProbation, sliderChange2, scrolltoJudge }=this.props;
        return (
            <>
            <div className={cx('wrapper',{disablewrap:slider1flag === 0})} >     
                <div className={styles.title} >
                    Q. 형의 집행을 유예하시겠습니까?
                </div>
                <div className={styles.subtitle}> 형법 제52조(집행유예의 요건) 제1항에 따라 <span>3년 이하</span>의 징역이나 금고 또는 <span>500만 원 이하</span>의 벌금형을 선고할 경우 1년 이상 5년 이하의 기간 형의 집행을 유예할 수 있습니다.</div>
                {slider1flag ===1 &&( 
                <div className={styles.btnwrapper}>       
                    <button 
                        type="button" 
                        className={cx('button',{selected: probation === 1})} 
                        onClick={selectProbation}
                        name='1'>
                        예
                    </button>
                    <button
                        type="button" 
                        className={cx('button',{selected:probation === 0})} 
                        onClick={selectProbation}
                        name='0'>
                        아니오
                    </button>
                </div>
                )}
                {slider1flag !==1 &&( 
                <div className={styles.btnwrapper}>       
                    <button 
                        type="button" 
                        className={cx('button',{disable:slider1flag === 0})}  
                        name='1'>
                        예
                    </button>
                    <button
                        type="button" 
                        className={cx('button',{disable:slider1flag === 0})} 
                        name='0'>
                        아니오
                    </button>
                </div>
                )}
                {probation === 1 && (
                    <>
                    <p className={styles.subtxt}>집행유예 기간을 선택하세요</p>
                    <div className={styles.sliderwrapper}>
                    <Slider
                        min={12}
                        max={60}
                        step={1}
                        format={monthFormat}
                        value={answer3}
                        labels={{ 12: '1년', 24: '2년', 36: '3년', 48:'4년', 60:'5년'}}
                        onChange={sliderChange2}
                        onChangeComplete={ scrolltoJudge}
                        />
                    </div>
                        <div className={styles.value}><span>{monthFormat(answer3)}</span></div>
                    </>
                    
                )}            
            </div>
            </>
        );
    }
}

export default Probation;