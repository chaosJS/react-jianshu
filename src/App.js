import GlobalStyle from './style';
// import GlobalIconStyle from '@static/iconfont/iconfont.js';
import Header from '@components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import '@static/iconfont/iconfont.css';
import Home from '@/pages/home';
import Detail from '@/pages/detail';
import Login from '@/pages/login';

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			{/* <GlobalIconStyle /> */}
			<BrowserRouter>
				<Header />
				<Route path={'/'} exact component={Home}></Route>
				<Route path={'/detail/:id'} exact component={Detail}></Route>
				<Route path={'/login'} exact component={Login}></Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
