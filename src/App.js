import GlobalStyle from './style';
// import GlobalIconStyle from '@static/iconfont/iconfont.js';
import Header from '@components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import '@static/iconfont/iconfont.css';
import Home from '@/pages/home';
import Detail from '@/pages/detail';
import BackTop from '@components/BackTop';

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			{/* <GlobalIconStyle /> */}
			<Header />
			<BrowserRouter>
				<Route path={'/'} exact component={Home}></Route>
				<Route path={'/detail'} exact component={Detail}></Route>
			</BrowserRouter>
			<BackTop></BackTop>
		</div>
	);
}

export default App;
