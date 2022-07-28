import {React} from 'react';
import styles from './info.module.css'
const Info = () => {
    return(
        <>
        <img src="/img/logo1.png" alt="logo" className={styles.img} />
        <p className={styles.subTitle}>1023회차 당첨금액</p>
        <p className={styles.prize}>2,745,677,875원</p>
        <p className={styles.subTitle}>1023회차 당첨번호</p>
        <p className={styles.num}>10,14,16,18,29,35 + 25</p>
        </>
    )

};

export default Info;