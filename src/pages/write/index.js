import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const Write = () => {
	const { isLogin } = useSelector((state) => {
		return state.loginDataFromState;
	});
	if (isLogin) {
		return <div>写/编辑文章</div>;
	} else {
		return <Redirect to="/login"></Redirect>;
	}
};

export default Write;
