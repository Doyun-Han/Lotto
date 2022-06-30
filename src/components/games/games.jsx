import { React } from 'react';
import Game from './game';
import styles from './games.module.css';

const Games = ({game}) => {

    return(
        <div className={styles.gameBoard}>
            <ul className={styles.items}>
                {game.map(g => 
                <li>
                <Game game={g} key={g[0]} className={styles.container}/>
                </li>
                )}
            </ul>
        </div>
        
    )
}

export default Games;