// import { Suspense, lazy } from 'react';
import GlobalStyle from './style';
// import GlobalIconStyle from '@static/iconfont/iconfont.js';
// import Header from '@components/Header';
import { HashRouter, Route, Switch } from 'react-router-dom';
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
const Blog = loadable(() => import('@/pages/blog'), RouterChangeFallback);
const BlogDetail = loadable(
	() => import('@/pages/blog/detail'),
	RouterChangeFallback
);
const BlogEdit = loadable(
	() => import('@/pages/blog/edit'),
	RouterChangeFallback
);
const BlogAdmin = loadable(
	() => import('@/pages/blog/admin'),
	RouterChangeFallback
);
function App() {
	return (
		<div className="App">
			<GlobalStyle />
			{/* <GlobalIconStyle /> */}
			<HashRouter>
				{/* <Suspense fallback={<div>Loading...</div>}> */}
				<Header />
				<Switch>
					<Route path={'/login'} exact component={Login}></Route>
					<Route path={'/'} exact component={Home}></Route>
					<Route path={'/detail/:id'} exact component={Detail}></Route>
					<Route path={'/write'} exact component={Write}></Route>
					<Route path={'/blog'} exact component={Blog}></Route>
					<Route path={'/blog/detail/:id'} exact component={BlogDetail}></Route>
					<Route path={'/blog/edit'} exact component={BlogEdit}></Route>
					<Route path={'/blog/admin'} exact component={BlogAdmin}></Route>
					<Route component={NoMatch} />
				</Switch>
				{/* </Suspense> */}
			</HashRouter>
		</div>
	);
}

export default App;
