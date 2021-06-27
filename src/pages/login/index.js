import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginWrapper, FormWrapper } from './style';
import { checkLogin } from '../../services/login';
import { Redirect } from 'react-router-dom';
const Login = () => {
	// no need for store state
	const [loginData, setLoginData] = useState({ username: '', password: '' });
	const { isLogin } = useSelector((state) => {
		return state.loginDataFromState;
	});
	const dispatch = useDispatch();
	const handleFormChange = (e) => {
		setLoginData({
			...loginData,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(checkLogin(loginData));
	};
	if (isLogin) {
		return <Redirect to="/"></Redirect>;
	} else {
		return (
			<LoginWrapper>
				<FormWrapper>
					<input
						placeholder="账号"
						name="username"
						type="username"
						onChange={handleFormChange}
					/>
					<input
						placeholder="密码"
						name="password"
						type="password"
						onChange={handleFormChange}
					/>
					<button type="submit" onClick={handleSubmit}>
						登陆
					</button>
				</FormWrapper>
			</LoginWrapper>
		);
	}
};

export default Login;
