import React from 'react';
import styles from './Articles.module.css'
// import img1 from "../../../assets/"
const Articles = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>관련기사보기</div>
            <ul className={styles.articles}>
                <li><a src="https://news.sbs.co.kr/news/endPage.do?news_id=N1005249288">불법촬영 사진 1장 죗값 7만9천 원…판결문 432건을 통해 본 '불촬' 대한민국</a></li>
                <li><a src="https://news.sbs.co.kr/news/endPage.do?news_id=N1005249289">최다 피해자는 '성명불상'…나도 모르게 피해자 되는 불법촬영</a></li>
                <li><a src="https://news.sbs.co.kr/news/endPage.do?news_id=N1005249358">'불법촬영' 판결 방정식을 풀어라! 벌금 300만원? 집행유예 2년?</a></li>
                <li><a src="https://news.sbs.co.kr/news/endPage.do?news_id=N1005252906">[마침] 판결문을 통해 본 '불촬' 대한민국의 민낯</a></li>
            </ul>
        </div>
    );
};

export default Articles;