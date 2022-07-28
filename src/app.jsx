import React from 'react';
import styles from './app.module.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/path/home';
import Main from './components/path/main';
import { useState } from 'react';
function App({round}) {

  const [game, setGame] = useState([])
  const addGame = (a) => {
    if(game !== '') {
      setGame('')
    }
    setGame(a)
  }
  return (
    <>
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home game={game} addGame={addGame}/>}></Route>
          <Route path='/main' element={<Main game={game}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;