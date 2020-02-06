import styled from "styled-components";
// BG Image
import bgImage from "../../img/tetnis-bg.png";

export const StyledTetrisWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	background: url(${bgImage}) #000;
	background-size: cover;
	@media (min-width: 767px) {
		width: 100vw;
		height: 100vh;
		background: url(${bgImage}) #000;
		background-size: cover;
		overflow: hidden;
	}
`;

export const StyledTetris = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	aside {
		width: 50%;
		max-width: auto;
		display: block;
		padding: 0 20px;
	}
	@media (min-width: 767px) {
		display: flex;
		align-items: flex-start;
		padding: 40px;
		margin: 0 auto;
		max-width: 900px;
		aside {
			width: 100%;
			max-width: 200px;
			display: block;
			padding: 0 20px;
		}
	}
`;
