import { useState, useCallback, useRef, useEffect } from 'react';
export const useMouseToggle = () => {
	const [isHover, setIsHover] = useState(false);
	return {
		isHover,
		bind: {
			onMouseEnter: () => {
				setIsHover(true);
			},
			onMouseLeave: () => {
				setIsHover(false);
			},
		},
		mouseEnter: () => {
			setIsHover(true);
		},
		mouseLeave: () => {
			setIsHover(false);
		},
	};
};

export const useThrottle = (fn, delay, dep = []) => {
	const { current } = useRef({ fn, timer: null });
	useEffect(
		function () {
			current.fn = fn;
		},
		[current, fn]
	);

	return useCallback(
		function f(...args) {
			if (!current.timer) {
				current.timer = setTimeout(() => {
					delete current.timer;
				}, delay);
				current.fn.call(this, ...args);
			}
		},
		[delay, current]
	);
};
