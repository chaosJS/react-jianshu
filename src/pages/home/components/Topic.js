import { TopicWrapper, TopicItem } from '../style';

const Topic = (props) => {
	const { topicList } = props;
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
