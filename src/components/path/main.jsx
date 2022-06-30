import React from 'react';
import Footer from '../footer/footer';
import Games from '../games/games';
import Header from '../header/header';
import styles from './main.module.css';
const Main = ({game}) => {
    return (
        <>
        <div className={styles.container}>
            <Header />
            <Games game={game}/>
            <Footer />
        </div>
        </>
    )
}

export default Main;