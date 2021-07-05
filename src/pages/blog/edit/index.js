import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { BlogWrapper } from './style';
import { useDispatch, useSelector } from 'react-redux';
import {
	getBlogDetail,
	newBlog,
	updateBlog,
	delBlog,
} from '../../../services/blog';
import { setBlogTitle, setBlogContent } from '../../../store/blogSlice';
import { useLocation, withRouter } from 'react-router';
const BlogEdit = () => {
	const [content, setContent] = useState('');
	const { search } = useLocation();
	const isUpdate = new URLSearchParams(search).get('update');
	const blogId = new URLSearchParams(search).get('id');
	const dispatch = useDispatch();
	const { createBlogSuccess, blogInfo } = useSelector((state) => {
		return state.blogDataFromState;
	});
	useEffect(() => {
		if (isUpdate) {
			dispatch(getBlogDetail(blogId));
		}
	}, [blogId, dispatch]);

	const saveContent = () => {
		dispatch(newBlog({ title: blogInfo.title, content: blogInfo.content }));
	};
	const updateContent = () => {
		dispatch(
			updateBlog({ blogId, title: blogInfo.title, content: blogInfo.content })
		);
	};
	const handleTitle = (e) => {
		dispatch(setBlogTitle({ title: e.target.value }));
	};
	const handleContent = (content) => {
		dispatch(setBlogContent({ content }));
	};
	const handleDelBlog = () => {
		dispatch(delBlog({ blogId }));
	};
	return (
		<BlogWrapper>
			<div>
				<div className="title-save">
					<span>{isUpdate ? 'Edit' : 'New'} Blog</span>
					<button onClick={saveContent}>save</button>
					<button onClick={updateContent}>update</button>
					<button onClick={handleDelBlog}>delete</button>
				</div>
				<input
					placeholder="title"
					value={blogInfo.title}
					onChange={handleTitle}
				/>
				<ReactQuill
					style={{ width: '800px', height: '300px' }}
					theme="snow"
					value={blogInfo.content}
					onChange={handleContent}
				/>
			</div>
		</BlogWrapper>
	);
};
export default withRouter(BlogEdit);
