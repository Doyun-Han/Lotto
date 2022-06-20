import React from 'react';
import styles from './info.module.css'
const Info = (props) => (
        <>
        <img src="/img/logo1.png" alt="logo" className={styles.img} />
        <p className={styles.subTitle}>지난주 1등 당첨액</p>
        <p className={styles.prize}>1,966,431,520원</p>
        <p className={styles.subTitle}>지난회차 당첨번호</p>
        <p className={styles.num}>12,27,29,38,41,45 + 6</p>
        </>
    );

export default Info;