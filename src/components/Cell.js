import React from "react";
import { StyledCell } from './styles/StyledCell';
import { RUSTOMINOS } from '../rustominos';


const Cell = ({ type }) => (
<StyledCell type={'L'} color={RUSTOMINOS['L'].color}>cell</StyledCell>
);

export default Cell;
