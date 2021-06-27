import styled from 'styled-components';
export const LoginWrapper = styled.div`
	font-size: 14px;
	height: 100vh;
	background-color: #f1f1f1;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const FormWrapper = styled.form`
	width: 400px;
	margin: 0 auto;
	padding: 50px 50px 30px;
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0 0 8px rgb(0 0 0 / 10%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	input {
		height: 50px;
		padding: 0 12px;
		border: 1px solid #c8c8c8;
		border-radius: 0 0 4px 4px;
		background-color: hsla(0, 0%, 71%, 0.1);
		vertical-align: middle;
	}
	button {
		margin-top: 20px;
		width: 100%;
		padding: 9px 18px;
		font-size: 18px;
		border: none;
		border-radius: 25px;
		color: #fff;
		background: #3194d0;
		cursor: pointer;
		outline: none;
		display: block;
		clear: both;
	}
`;
