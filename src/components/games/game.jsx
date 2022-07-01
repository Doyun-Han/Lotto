import React from 'react';
import styles from './game.module.css'
const Game = ({game}) => {
    let id = 0
    return(
        <>
        <div className={styles.container}>
            <div className={styles.box}>
                <h2 className={styles.title}>Lotto</h2>
                <p>-------------------------------------------</p>
                <ul className={styles.lists}>
                    {
                        game.map(ga => {
                            id++;
                            return <li className={styles.list} key={id}>
                            <span className={styles.gametitle}><span className={styles.symbol}>◆</span> 자<span className={styles.blank} /> 동</span>
                            {
                                ga.map(n => {
                                    if(n < 10) {
                                        return <span className={styles.num}>0{n}</span>
                                    }else
                                    return <span className={styles.num}>{n}</span>
                                })
                            }
                        </li>
                        })
                    }
                </ul>
            </div>
            <div className={styles.sidetap}></div>
        </div>
        

        </>
    )
}

export default Game;