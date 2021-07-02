import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { BlogWrapper } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { newBlog, updateBlog, delBlog } from '../../../services/blog';
import { useLocation, withRouter } from 'react-router';
const BlogEdit = () => {
	const [content, setContent] = useState('');
	const [title, setTitle] = useState('');
	const { search } = useLocation();
	const blogId = new URLSearchParams(search).get('id');
	const dispatch = useDispatch();
	const { createBlogSuccess } = useSelector((state) => {
		return state.blogDataFromState;
	});
	// useEffect(() => {}, [dispatch]);

	const saveContent = () => {
		dispatch(newBlog({ title, content }));
	};
	const updateContent = () => {
		dispatch(updateBlog({ blogId, title, content }));
	};
	const handleTitle = (e) => {
		setTitle(e.target.value);
	};
	const handleDelBlog = () => {
		dispatch(delBlog({ blogId }));
	};
	return (
		<BlogWrapper>
			<div>
				<div className="title-save">
					<span>New Blog</span>
					<button onClick={saveContent}>save</button>
					<button onClick={updateContent}>update</button>
					<button onClick={handleDelBlog}>delete</button>
				</div>
				<input placeholder="title" value={title} onChange={handleTitle} />
				<ReactQuill
					style={{ width: '800px', height: '300px' }}
					theme="snow"
					value={content}
					onChange={setContent}
				/>
			</div>
		</BlogWrapper>
	);
};
export default withRouter(BlogEdit);
