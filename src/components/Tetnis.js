import React from 'react';

import { createStage } from '../gameHelpers';

import { StyledTetnisWrapper, StyledTetnis } from './styles/StyledTetnis';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetnis = () => {
    return (
        <StyledTetnisWrapper>
            <StyledTetnis>
            <Stage stage={createStage()} />
            <aside>
                <div>                    
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
                </div>
                <StartButton /> 
            </aside>
            </StyledTetnis>
        </StyledTetnisWrapper>
    )
}

export default Tetnis;
