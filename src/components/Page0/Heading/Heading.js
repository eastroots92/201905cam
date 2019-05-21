import React from 'react'
import styles from './Heading.module.css'
import title from '../../../assets/img/title.png'

const Heading = ({
  startscroll
}) => (
  <div className={styles.wrapper}>
    <img className={styles.title} src={title} alt="title" />
    <button 
      to="intro" 
      className={styles.startbtn}
      onClick={startscroll}
      >
      시작하기
    </button>
  </div>
  
  // <h1 className={styles.wrapper}>
  //   시민 판사
  //   <em className={styles.emphasis}>불법촬영 범죄를 판결하다</em>
  // </h1>
)

export default Heading
