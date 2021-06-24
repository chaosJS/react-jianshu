import { useSelector } from 'react-redux';
import {
	ArticleListWrapper,
	ArticleList,
	ArticleInfo,
	ArticleImg,
} from '../style';
import LoadMore from '@components/LoadMore';
import { Link } from 'react-router-dom';
const List = () => {
	const articleList = useSelector((state) => state.topicList.articleList);
	return (
		<>
			<ArticleListWrapper>
				{articleList.map((item, index) => (
					<ArticleList key={index}>
						<ArticleInfo>
							<h3>
								<Link to={`${item.to}/${item.id}`}>{item.title}</Link>
								{/* <Link to={`${item.to}?id=${item.id}`}>{item.title}</Link> */}
							</h3>
							<p>{item.desc}</p>
						</ArticleInfo>
						<ArticleImg>
							<Link to={item.to}>
								<img src={item.imgUrl} alt={item.title} />
							</Link>
						</ArticleImg>
					</ArticleList>
				))}
			</ArticleListWrapper>
			<LoadMore></LoadMore>
		</>
	);
};

export default List;
