import React, { useState } from 'react';

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

    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log('re-render');

    return (
        <StyledTetnisWrapper>
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
                <StartButton />
            </aside>
            </StyledTetnis>
        </StyledTetnisWrapper>
                
    )
}

export default Tetnis;
