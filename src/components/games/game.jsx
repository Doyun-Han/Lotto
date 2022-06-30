import React from 'react';
import styles from './game.module.css'
const Game = ({game}) => {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.box}>
                <h2 className={styles.title}>Lotto</h2>
                <p>-------------------------------------------</p>
                <ul className={styles.lists}>
                        <li className={styles.list}>
                        <span className={styles.gametitle}><span className={styles.symbol}>◆</span> 자<span className={styles.blank} /> 동</span>
                        {
                            game[0].map(n => {
                                if(n < 10) {
                                    return <span className={styles.num}>0{n}</span>
                                }else
                                return <span className={styles.num}>{n}</span>
                            })
                        }
                    </li>
                    <li className={styles.list}>
                        <span className={styles.gametitle}><span className={styles.symbol}>◆</span> 자<span className={styles.blank} /> 동</span>
                        {
                            game[1].map(n => {
                                if(n < 10) {
                                    return <span className={styles.num}>0{n}</span>
                                }else
                                return <span className={styles.num}>{n}</span>
                            })
                        }
                    </li>
                    <li className={styles.list}>
                        <span className={styles.gametitle}><span className={styles.symbol}>◆</span> 자<span className={styles.blank} /> 동</span>
                        {
                            game[2].map(n => {
                                if(n < 10) {
                                    return <span className={styles.num}>0{n}</span>
                                }else
                                return <span className={styles.num}>{n}</span>
                            })
                        }
                    </li>
                    <li className={styles.list}>
                        <span className={styles.gametitle}><span className={styles.symbol}>◆</span> 자<span className={styles.blank} /> 동</span>
                        {
                            game[3].map(n => {
                                if(n < 10) {
                                    return <span className={styles.num}>0{n}</span>
                                }else
                                return <span className={styles.num}>{n}</span>
                            })
                        }
                    </li>
                    <li className={styles.list}>
                        <span className={styles.gametitle}><span className={styles.symbol}>◆</span> 자<span className={styles.blank} /> 동</span>
                        {
                            game[4].map(n => {
                                if(n < 10) {
                                    return <span className={styles.num}>0{n}</span>
                                }else
                                return <span className={styles.num}>{n}</span>
                            })
                        }
                    </li>
                </ul>
            </div>
            <div className={styles.sidetap}></div>
        </div>
        

        </>
    )
}

export default Game;