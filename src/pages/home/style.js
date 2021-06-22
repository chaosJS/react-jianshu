import styled from 'styled-components';

export const HomeMain = styled.div`
	display: flex;
`;

export const LeftContent = styled.div`
	width: 66.6666%;
	margin-right: 40px;
	padding-top: 30px;
	margin-left: 15px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`;
export const RightContent = styled.div`
	flex: 1;
`;

// topic style
export const TopicWrapper = styled.ul`
	display: flex;
	justify-content: start;
	align-items: center;
	flex-wrap: wrap;
	padding: 20px 0 10px 0;
`;

export const TopicItem = styled.li`
	background-color: #f7f7f7;
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	margin-right: 12px;
	margin-bottom: 10px;
	img {
		width: 32px;
		height: 32px;
		vertical-align: top;
	}
	span {
		padding: 0 10px;
	}
`;
// article list
export const ArticleListWrapper = styled.ul`
	padding: 20px 0 10px 0;
`;

export const ArticleList = styled.li`
	display: flex;
	align-items: center;
	margin: 0 0 15px;
	border-bottom: 1px solid #f0f0f0;
`;

export const ArticleInfo = styled.div`
	width: 75%;
	padding-right: 12px;
	h3 {
		margin-bottom: 4px;
		a {
			font-size: 18px;
			font-weight: 700;
			line-height: 1.5;
			color: #333;
			:hover {
				text-decoration: underline;
			}
		}
	}
	p {
		margin: 0 0 8px;
		font-size: 13px;
		line-height: 24px;
		color: #999;
	}
`;
export const ArticleImg = styled.div`
	flex: 1;
	a {
		display: block;
		img {
			width: 100%;
			height: 100px;
			border-radius: 4px;
			border: 1px solid #f0f0f0;
		}
	}
`;
