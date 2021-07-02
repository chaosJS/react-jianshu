import BaseContainer from '@/components/BaseContainer';
import { BlogListWrapper } from './style';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogList } from '../../services/blog';
import dayjs from 'dayjs';
const Blog = () => {
	const dispatch = useDispatch();
	const { loading, blogList } = useSelector((state) => state.blogDataFromState);
	useEffect(() => {
		dispatch(getBlogList());
	}, []);
	return (
		<BaseContainer>
			<BlogListWrapper>
				{loading ? (
					<li>loading</li>
				) : (
					blogList.map((item) => (
						<li key={item.id}>
							<h3>
								<Link to={`/blog/detail/${item.id}`}>{item.title}</Link>
							</h3>
							<div
								className="content"
								dangerouslySetInnerHTML={{ __html: item.content }}
							></div>
							<p className="author">
								{item.author}
								<span>{dayjs(item.createtime).format('MM/DD HH: MM: ss')}</span>
							</p>
						</li>
					))
				)}
			</BlogListWrapper>
		</BaseContainer>
	);
};
export default Blog;
