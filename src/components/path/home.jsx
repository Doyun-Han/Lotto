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