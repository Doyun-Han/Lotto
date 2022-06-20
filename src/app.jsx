import React from 'react';
import styles from './app.module.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/path/home';
import Main from './components/path/main';
function App() {
  return (
    <>
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/main' element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;