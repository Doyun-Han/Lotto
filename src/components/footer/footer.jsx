import React from 'react';
import styles from './footer.module.css'
const Footer = (props) => (
    <>
    <div className={styles.container}>
        <p className={styles.footer}>이번주 1등은 바로 당신!</p>
        <p className={styles.right}>Copyright 2022 by David_H All right reserved</p>
    </div>
    </>

    );

export default Footer;