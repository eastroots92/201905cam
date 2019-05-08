import React from 'react';
import styles from './Score.module.css'

const Score = ({score})=>(
    <p className={styles.wrapper}>Score: {score}</p>
)
// class Score extends Component {
//     constructor(props){
//         //state정의 방법 1 컨스트럭터 : 처음에 만들어 질때 호출
//         super(props) //상위 컨스트럭터 호출
//         this.state={
//             score:0,
//         }
//     }
//     render(){
//         const {score} = this.state //분해대입 {this.state.score}를 더 편하게 쓰기 
//         return(
//             <p className={styles.wrapper}>Score: {score}</p>
            
//         )
//     }
// }
export default Score;