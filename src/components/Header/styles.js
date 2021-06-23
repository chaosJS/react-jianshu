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
	position: relative;
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
export const NavSearch = styled.input.attrs({
	placeholder: '搜索',
})`
	box-sizing: border-box;
	width: ${(props) => (props.focused ? '200px' : '150px')};
	height: 36px;
	border: none;
	outline: none;
	border-radius: 19px;
	background-color: #eee;
	padding: 0 18px;
	margin: 0 10px;
	font-size: 14px;

	&.slide-enter {
		transition: all 0.4s ease-out;
	}
	&.slide-enter-active {
		width: 200px;
	}
	&.slide-exit {
		transition: all 0.4s ease-out;
	}
	&.slide-exit-active {
		width: 150px;
	}
`;

export const SearchInfo = styled.div`
	background-color: #fff;
	position: absolute;
	top: 56px;
	left: 0;
	width: 200px;
	padding: 10px 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const SearchInfoTitle = styled.div`
	margin: 10px 0;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
	display: flex;
`;
export const SearchInfoSwitch = styled.span`
	margin-left: auto;
	font-size: 12px;
	cursor: pointer;
	i {
		font-size: 12px;
		margin-right: 4px;
		display: inline-block;
		transition: transform 1s;
	}
`;
export const SearchList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: start;
	flex-wrap: wrap;
	font-size: 13px;
	color: #969696;
`;
export const SearchItem = styled.li`
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 2px 4px;
	margin: 4px;
	cursor: pointer;
	:hover {
		color: #333;
	}
`;
