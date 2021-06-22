import { useSelector } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

const Topic = () => {
	const topicList = useSelector((state) => state.topicList.list);
	return (
		<TopicWrapper>
			{topicList.map((item) => (
				<TopicItem key={item.id}>
					<img src={item.imgUrl} alt={item.title} />
					<span>{item.title}</span>
				</TopicItem>
			))}
		</TopicWrapper>
	);
};

export default Topic;
