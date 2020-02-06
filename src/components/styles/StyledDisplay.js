import styled from 'styled-components';

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 10px 0 10px 0;
    padding: 20px;
    border: 4px solid #333;
    height: 2rem;
    border-radius: 20px;
    color: ${props => (props.gameOver ? 'red' : '#ff9800')};
    background: #361002;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
`;