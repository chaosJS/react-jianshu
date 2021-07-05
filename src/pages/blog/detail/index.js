import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import BaseContainer from '@/components/BaseContainer';
import { getBlogDetail } from '../../../services/blog';
import { useDispatch, useSelector } from 'react-redux';

const BlogDetail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { loading, blogInfo } = useSelector((state) => state.blogDataFromState);
	useEffect(() => {
		dispatch(getBlogDetail(id));
	}, [id, dispatch]);
	return (
		<BaseContainer>
			{loading ? (
				<div>loading</div>
			) : (
				<div>
					<h3>
						{blogInfo.title}
						<Link to={`/blog/edit?update=1&id=${blogInfo.id}`}>编辑</Link>
					</h3>
					<div dangerouslySetInnerHTML={{ __html: blogInfo.content }}></div>
				</div>
			)}
		</BaseContainer>
	);
};

export default BlogDetail;
