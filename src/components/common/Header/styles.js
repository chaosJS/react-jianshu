import styled from 'styled-components';

export const HeaderWapper = styled.div`
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
	min-width: 768px;
	max-width: 1440px;
	margin: 0 auto;
`;
export const Logo = styled.a`
	cursor: pointer;
	height: 56px;
	padding: 0;
	float: left;
	img {
		height: 100%;
	}
`;
export const TopNav = styled.ul`
	display: flex;
	align-items: center;
`;
export const NavItem = styled.li`
	margin-left: ${(props) => (props.right ? 'auto' : 'unset')};
	& a {
		color: #ea6f5a;
		text-decoration: none;
		line-height: 26px;
		font-size: 18px;
		padding: 15px;
		display: flex;
		i {
			font-size: 19px;
			margin-right: 4px;
		}
	}
`;
export const RightBtn = styled.button`
	float: right;
	width: 80px;
	height: 38px;
	line-height: 24px;
	margin: 9px 12px 0 15px;
	border: 1px solid rgba(236, 97, 73, 0.7);
	border-radius: 20px;
	font-size: 15px;
	color: ${(props) => (props.write ? '#fff' : '#ea6f5a')};
	background-color: ${(props) => (props.write ? '#ea6f5a' : 'transparent')};
	font-weight: 400;
	text-align: center;
	vertical-align: middle;
	padding: 1px 6px;
	cursor: pointer;
	user-select: none;
	:hover {
		color: #ec6149;
		border-color: #ec6149;
		background-color: rgba(236, 97, 73, 0.05);
	}
`;
