import { useState, useCallback } from 'react';
export const useMouseToggle = () => {
	const [isHover, setIsHover] = useState(false);
	return {
		isHover,
		bind: {
			onMouseEnter: useCallback(() => {
				setIsHover(true);
			}),
			onMouseLeave: useCallback(() => {
				setIsHover(false);
			}),
		},
		mouseEnter: useCallback(() => {
			setIsHover(true);
		}),
		mouseLeave: useCallback(() => {
			setIsHover(false);
		}, []),
	};
};
