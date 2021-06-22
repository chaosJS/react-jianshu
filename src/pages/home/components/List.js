import { useSelector } from 'react-redux';
import {
	ArticleListWrapper,
	ArticleList,
	ArticleInfo,
	ArticleImg,
} from '../style';

const List = () => {
	const articleList = useSelector((state) => state.topicList.articleList);
	return (
		<ArticleListWrapper>
			{articleList.map((item) => (
				<ArticleList key={item.id}>
					<ArticleInfo>
						<h3>
							<a href={item.to}>{item.title}</a>
						</h3>
						<p>{item.desc}</p>
					</ArticleInfo>
					<ArticleImg>
						<a href={item.to}>
							<img src={item.imgUrl} alt={item.title} />
						</a>
					</ArticleImg>
				</ArticleList>
			))}
		</ArticleListWrapper>
	);
};

export default List;
