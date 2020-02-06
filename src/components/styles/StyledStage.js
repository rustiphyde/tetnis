import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 6px groove #b7410e;
  width: 100%;
  max-width: 25vw;
  background: #411705;
`;

// export const StyledStage = styled.div`
//   display: grid;
//   grid-template-rows: repeat(
//     ${props => props.height},
//     calc(72vw / ${props => props.width})
//   );
//   grid-template-columns: repeat(${props => props.width}, 1fr);
//   grid-gap: 1px;
//   border: 6px groove #b7410e;
//   width: 100%;
//   max-width: 72vw;
//   background: #411705;
//   @media(min-width: 767px){
//     grid-template-rows: repeat(
//       ${props => props.height},
//       calc(25vw / ${props => props.width})
//     );
//     max-width: 25vw;
//   }
// `;