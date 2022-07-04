import { useEffect } from 'react';
import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { secondGame, randomGame, sortNum } from '../../data/data';
import Button from '../button/button';
import Footer from '../footer/footer';
import Header from '../header/header';
import Info from '../info/info';
import styles from './home.module.css'
const Home = ({addGame}) => {
    const navigate = useNavigate();

    const setGame = () => {
        let a = ''
        let filternum = ''
        let b = ''
        const data = [];
        a = randomGame()
        data.push(a);
        filternum = sortNum(a);
        b = secondGame(filternum);
        data.push(b);
        addGame(data)
        gotoMain();
    }

    const gotoMain = () => {
        navigate('/main')
    }

    useEffect(()=> {
        let ins = document.createElement('ins');
        let scr = document.createElement('script');

        ins.className = 'kakao_ad_area';
        ins.style = "display:none;";
        scr.async = 'true';
        scr.type = "text/javascript";
        scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        ins.setAttribute('data-ad-width', '320');
        ins.setAttribute('data-ad-height', '100');
        ins.setAttribute('data-ad-unit', 'DAN-aMwDDc45vvdBFbJl');

        document.querySelector('.adfit').appendChild(ins);
        document.querySelector('.adfit').appendChild(scr);
    })
    return(
        <>
        <div className={styles.container}>
        <Header />
        <Info />
        <Button setGame={setGame}/>
        <Footer />
        </div>
        <div className="adfit"/>
        </>
    )
}


export default Home;