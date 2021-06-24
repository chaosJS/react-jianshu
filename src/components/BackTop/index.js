import { useEffect } from 'react';
import { BackTopWapper } from './style';
import { useThrottle } from '../../hooks';
import { useState } from 'react';

const BackTop = () => {
	const [showBackTop, setShowBackTop] = useState(false);
	const scrollCb = useThrottle((e) => {
		const scrollTop = document.documentElement.scrollTop;
		if (scrollTop > 200) {
			setShowBackTop(true);
		} else {
			setShowBackTop(false);
		}
	}, 500);
	useEffect(() => {
		window.addEventListener('scroll', scrollCb);

		return () => {
			window.removeEventListener('scroll', scrollCb);
		};
	}, []);
	return (
		<>
			{showBackTop ? (
				<BackTopWapper
					onClick={() => {
						window.scrollTo(0, 0);
					}}
				>
					^
				</BackTopWapper>
			) : null}
		</>
	);
};

export default BackTop;
