import React from 'react'
import styles from './Dialog.module.css'
// 삼항연산자사용 ~~?맞:틀
//<> 쓰는 이유: 렌더되는 루트요소 무조건 하나여야함 따라서 빈엘리먼트안에 넣기위해 React.fragment 이걸 생략한것 <>
const Dialog = ({
  correctAnswerIndex,
  score,
  selectedIndex,
  setNextStage,
  setInitialStage,
}) => (
    <div className={styles.wrapper}>
      {correctAnswerIndex === selectedIndex
        ? (
          <>
            <p className={styles.paragraph}>That's right!</p>
            <button
              type="button"
              className={styles.button}
              onClick={setNextStage}
            >
              Next color
          </button>
          </>
        )
        : (
          <>
            <p className={styles.paragraph}>Too bad :(</p>
            <p className={styles.score}>Score: {score}</p>
            <button
              type="button"
              className={styles.button}
              onClick={setInitialStage}
            >
              Play again
          </button>
          </>
        )}
    </div>
  )

export default Dialog