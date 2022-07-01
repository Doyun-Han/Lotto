import React from 'react';
import styles from './info.module.css'
const Info = (props) => (
        <>
        <img src="/img/logo1.png" alt="logo" className={styles.img} />
        <p className={styles.subTitle}>1021회차 당첨금액</p>
        <p className={styles.prize}>2,108,962,250원</p>
        <p className={styles.subTitle}>1021회차 당첨번호</p>
        <p className={styles.num}>12,15,17,24,29,45 + 16</p>
        </>
    );

export default Info;