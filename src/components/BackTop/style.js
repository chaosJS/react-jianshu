import styled from 'styled-components';
export const BackTopWapper = styled.div`
	position: fixed;
	bottom: 40px;
	right: 40px;
	z-index: 1040;
	cursor: pointer;

	width: 50px;
	height: 50px;
	text-align: center;
	border: 1px solid #dcdcdc;
	background-color: #fff;
	transition: 0.1s ease-in;
	display: flex;
	align-items: center;
	justify-content: center;
	:hover {
		background-color: hsla(0, 0%, 71%, 0.1);
		transition: 0.1s ease-in;
	}
`;
