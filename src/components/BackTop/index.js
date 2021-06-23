import { BackTopWapper } from './style';
const BackTop = () => {
	return (
		<BackTopWapper
			onClick={() => {
				window.scrollTo(0, 0);
			}}
		>
			^
		</BackTopWapper>
	);
};

export default BackTop;
