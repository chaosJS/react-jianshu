import { Container } from '@/commonStyle';
import { useEffect } from 'react';
import { HomeMain, LeftContent, RightContent } from '../home/style';
import { fetchDetailById } from '../../services/detail';
import { useDispatch, useSelector } from 'react-redux';
import { ArticleWrapper, LeftWrapper } from './style';
import Recommend from '../home/components/Recommend';
const Detail = (props) => {
	const {
		match: {
			params: { id },
		},
	} = props;
	// const {
	// 	location: { search },
	// } = props;
	// search = '?id=1' 需要解析使用
	const dispatch = useDispatch();
	const { detailData, loading } = useSelector(
		(state) => state.detailDataFromState
	);

	useEffect(() => {
		dispatch(fetchDetailById(id));
	}, [id]);
	return (
		<div style={{ backgroundColor: '#f9f9f9' }}>
			<Container>
				<HomeMain>
					<LeftContent>
						<ArticleWrapper>
							<h3>
								{id}

								{detailData.title}
							</h3>
							<div
								dangerouslySetInnerHTML={{ __html: detailData.free_content }}
							></div>
						</ArticleWrapper>
					</LeftContent>
					<RightContent>
						<LeftWrapper>
							<Recommend />
						</LeftWrapper>
					</RightContent>
				</HomeMain>
			</Container>
		</div>
	);
};

export default Detail;
