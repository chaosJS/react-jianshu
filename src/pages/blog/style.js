import styled from 'styled-components';
export const BlogListWrapper = styled.ul`
	li {
		border-bottom: 1px solid #f0f0f0;
		margin: 12px 0;
		padding-bottom: 12px;
		h3 {
			a {
				font-size: 18px;
				font-weight: 700;
				line-height: 1.5;
				color: #333;
			}
		}
		.content {
			margin: 0 0 8px;
			font-size: 14px;
			line-height: 24px;
			color: #999;
		}
		.author {
			display: flex;
			font-size: 13px;
			span {
				margin-left: 20px;
			}
		}
	}
`;
