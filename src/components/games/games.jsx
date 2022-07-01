import { React } from 'react';
import Game from './game';
import styles from './games.module.css';

const Games = ({game}) => {
    let id = 0
    return(
        <div className={styles.gameBoard}>
            <ul className={styles.items}>
                {game.map(g => {
                    id++;
                    return <li>
                    <Game game={g} key={id} className={styles.container}/>
                    </li>
                }
                
                )}
            </ul>
        </div>
        
    )
}

export default Games;