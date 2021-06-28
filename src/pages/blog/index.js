import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { BlogWrapper } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { newBlog } from '../../services/blog';
const Blog = () => {
	const [content, setContent] = useState('');
	const [title, setTitle] = useState('');

	const dispatch = useDispatch();
	const { createBlogSuccess } = useSelector((state) => {
		return state.blogDataFromState;
	});
	useEffect(() => {}, [dispatch]);

	const saveContent = () => {
		dispatch(newBlog({ title, content }));
	};
	const handleTitle = (e) => {
		setTitle(e.target.value);
	};
	return (
		<BlogWrapper>
			<div>
				<div className="title-save">
					<span>New Blog</span>
					<button onClick={saveContent}>save</button>
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
export default Blog;
