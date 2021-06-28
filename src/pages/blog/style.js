import styled from 'styled-components';
export const BlogWrapper = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	.title-save {
		font-size: 20px;
		line-height: 48px;
		text-align: center;
		span {
			text-align: center;
		}
		button {
			float: right;
			height: 48px;
			color: #fff;
			line-height: 48px;
			width: 80px;
			border: 1px solid rgba(236, 97, 73, 0.7);
			border-radius: 20px;
			font-size: 18px;
			background-color: #ea6f5a;
			font-weight: 400;
			text-align: center;
			vertical-align: middle;
			padding: 1px 6px;
			cursor: pointer;
		}
	}
	input {
		box-sizing: border-box;
		width: 100%;
		box-shadow: none;
		color: inherit;
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		margin: 14px 2px;
		padding: 4px 8px;
		outline: none;
		border: 1px solid #ccc;
	}
`;
