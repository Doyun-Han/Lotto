import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button';
import Footer from '../footer/footer';
import Header from '../header/header';
import Info from '../info/info';
const Home = (props) => {
    const navigate = useNavigate();

    return(
        <>
        <Header />
        <Info />
        <Button />
        <Footer />
        </>
    )
}


export default Home;