import React, { useState } from 'react';

import { createStage } from '../gameHelpers';

// Styled Components
import { StyledTetnisWrapper, StyledTetnis } from './styles/StyledTetnis';
// Custom Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetnis = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log('re-render');

const moveplayer = dir => {
    updatePlayerPos({ x: dir, y: 0 })
}

const startGame = () => {
    //reset everything
    setStage(createStage());
    resetPlayer();
}

const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false })
}

const dropPlayer = () => {
    drop();
}

const move = ({ keyCode }) => {
    if(!gameOver){
        if(keyCode === 37) {
            moveplayer(-1);
        } else if (keyCode === 39) {
            moveplayer(1);
        } else if (keyCode === 40) {
            dropPlayer();
        }
    }
}

    return (
        <StyledTetnisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
            <StyledTetnis>
            <Stage stage={stage} />
            <aside>
                {gameOver ? (
                    <Display gameOver={gameOver} text="Game Over \nYou've been RUSTIFIED" />
                ) : (
                <div>                    
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
                </div>
                )}
                <StartButton callback={startGame}/>
            </aside>
            </StyledTetnis>
        </StyledTetnisWrapper>
                
    )
}

export default Tetnis;
