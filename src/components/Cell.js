import React from "react";
import { StyledCell } from './styles/StyledCell';
import { RUSTOMINOS } from '../rustominos';


const Cell = ({ type }) => (
<StyledCell type={type} color={RUSTOMINOS[type].color}></StyledCell>
);

export default Cell;
