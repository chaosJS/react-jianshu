import { addArticleList } from '@/services/posts';
import { useDispatch, useSelector } from 'react-redux';

import { LoadMoreWapper } from './style';
const LoadMore = () => {
	const dispatch = useDispatch();
	const { articleLoading, articlePage } = useSelector(
		(state) => state.topicList
	);

	return (
		<LoadMoreWapper
			onClick={() => {
				dispatch(addArticleList(articlePage));
			}}
		>
			{articleLoading ? 'loading' : '阅读更多'}
		</LoadMoreWapper>
	);
};

export default LoadMore;
