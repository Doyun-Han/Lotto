import React from 'react';
import styles from './button.module.css'
const Button = ({setGame}) => (
    <>
        <button onClick={setGame}>추첨하기</button>
    </>
    );

export default Button;