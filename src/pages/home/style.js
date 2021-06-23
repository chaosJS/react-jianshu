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
// recommend list
export const RecommendWrapper = styled.div`
	padding-top: 30px;
	a {
		color: #333;
		cursor: pointer;
		img {
			width: 100%;
			min-height: 50px;
			margin-bottom: 6px;
			border-radius: 4px;
		}
	}
`;
// download app
export const DownloadWrapper = styled.div`
	margin-bottom: 30px;
	padding: 10px 22px;
	border: 1px solid #f0f0f0;
	border-radius: 6px;
	background-color: #fff;
	display: flex;
	align-items: center;
	position: relative;
	.download-app {
		img {
			width: 60px;
			height: 60px;
			opacity: 0.85;
		}
	}
	.content {
		color: #333;
		cursor: pointer;
		margin-left: 7px;
		.title {
			font-size: 15px;
			color: #333;
		}
		.desc {
			margin-top: 4px;
			font-size: 13px;
			color: #999;
		}
	}
`;
// hover download app
export const HoverDownloadWrapper = styled.div`
	position: absolute;
	bottom: 100px;
	left: 48px;
	background-color: #fff;
	padding: 10px;
	img {
		width: 160px;
		height: 160px;
	}
`;

// recommend authors
export const AuthorListWrapper = styled.div`
	.title {
		display: flex;
		font-size: 14px;
		color: #969696;
		i {
			font-size: 12px;
			margin-right: 5px;
		}
	}
`;
export const AuthorList = styled.ul`
	li {
		display: flex;
		margin-top: 15px;
		img {
			width: 48px;
			height: 48px;
			border: 1px solid #ddd;
			border-radius: 50%;
			margin-right: 10px;
		}
		.info {
			flex: 1;
			display: flex;
			flex-direction: column;
			.name {
				display: flex;
				flex: 1;
				line-height: 2;
				font-size: 14px;
				color: #333;
				span {
					margin-left: auto;
					font-size: 13px;
					color: #42c02e;
				}
			}
			.desc {
				flex: 1;
				line-height: 2;
				font-size: 12px;
				color: #969696;
			}
		}
	}
`;
