import { Container } from '@/commonStyle';
import { HomeMain, LeftContent, RightContent } from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';

const Home = () => {
	return (
		<Container>
			<HomeMain>
				<LeftContent>
					<img
						className="banner-img"
						src="https://t7.baidu.com/it/u=2604797219,1573897854&fm=193&f=GIF"
						alt="banner-img"
					/>
					<Topic />
					<List />
				</LeftContent>
				<RightContent>
					<Recommend />
					<Writer />
				</RightContent>
			</HomeMain>
		</Container>
	);
};

export default Home;
