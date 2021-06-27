// import { Suspense, lazy } from 'react';
import GlobalStyle from './style';
// import GlobalIconStyle from '@static/iconfont/iconfont.js';
// import Header from '@components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '@static/iconfont/iconfont.css';
// Suspense + lazy
// const Header = lazy(() => import('@components/Header'));
// const Home = lazy(() => import('@/pages/home'));
// const Detail = lazy(() => import('@/pages/detail'));
// const Login = lazy(() => import('@/pages/login'));
// const NoMatch = lazy(() => import('@/pages/noMatch'));
// const Write = lazy(() => import('@/pages/write'));

// loadable/component
import loadable from '@loadable/component';
const RouterChangeFallback = {
	fallback: <div>Loading...</div>,
};
const Header = loadable(
	() => import('@components/Header'),
	RouterChangeFallback
);
const Home = loadable(() => import('@/pages/home'), RouterChangeFallback);
const Detail = loadable(() => import('@/pages/detail'), RouterChangeFallback);
const Login = loadable(() => import('@/pages/login'), RouterChangeFallback);
const NoMatch = loadable(() => import('@/pages/noMatch'), RouterChangeFallback);
const Write = loadable(() => import('@/pages/write'), RouterChangeFallback);

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			{/* <GlobalIconStyle /> */}
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				{/* <Suspense fallback={<div>Loading...</div>}> */}
				<Header />
				<Switch>
					<Route path={'/login'} exact component={Login}></Route>
					<Route path={'/'} exact component={Home}></Route>
					<Route path={'/detail/:id'} exact component={Detail}></Route>
					<Route path={'/write'} exact component={Write}></Route>
					<Route component={NoMatch} />
				</Switch>
				{/* </Suspense> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
