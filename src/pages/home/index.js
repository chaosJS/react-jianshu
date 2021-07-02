import BaseContainer from '@/components/BaseContainer';
import { HomeMain, LeftContent, RightContent } from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { getTopicList, getAuthorList } from '../../services/posts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackTop from '@components/BackTop';
const Home = () => {
	const { list, loading } = useSelector((state) => state.topicList);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTopicList());
		dispatch(getAuthorList());
	}, [dispatch]);

	const authorListData = useSelector((state) => state.authorList);
	return (
		<BaseContainer>
			<HomeMain>
				<LeftContent>
					<img
						className="banner-img"
						src="https://t7.baidu.com/it/u=2604797219,1573897854&fm=193&f=GIF"
						alt="banner-img"
					/>
					{loading ? <>loading...</> : <Topic topicList={list} />}
					<List />
				</LeftContent>
				<RightContent>
					<Recommend />
					<Writer {...authorListData} />
				</RightContent>
			</HomeMain>
			<BackTop></BackTop>
		</BaseContainer>
	);
};

export default Home;
