import GlobalStyle from './style';
// import GlobalIconStyle from '@static/iconfont/iconfont.js';
import Header from '@components/common/Header';
import '@static/iconfont/iconfont.css';
function App() {
	return (
		<div className="App">
			<GlobalStyle />
			{/* <GlobalIconStyle /> */}
			<Header />
		</div>
	);
}

export default App;
