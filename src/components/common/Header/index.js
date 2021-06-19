import {
	HeaderWapper,
	Logo,
	TopNav,
	NavItem,
	RightBtn,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchList,
	SearchItem,
} from './styles';
import logoImg from '@static/images/logo.png';
import { Container } from '@/commonStyle';
import { CSSTransition } from 'react-transition-group';
// use redux state
import { useSelector, useDispatch } from 'react-redux';
import { inputFocused, inputBlur } from '../../../store/focusSlice';

import { fetchPostById } from '../../../services/posts';
import { useEffect } from 'react';
import { useState } from 'react';
const Header = () => {
	// const [focused, setFocused] = useState(false);
	const [myLoading, setMyLoading] = useState(false);
	const dispatch = useDispatch();

	const handleFocus = () => {
		// setFocused(true);

		setMyLoading(true);
		dispatch(fetchPostById(1)).then(() => {
			setMyLoading(false);
		});
		dispatch(inputFocused());
	};
	const handleBlur = () => {
		// setFocused(false);
		dispatch(inputBlur());
	};
	const focusedFromState = useSelector((state) => {
		return state.focusState.focused;
	});
	const { list, loading, error } = useSelector((state) => {
		return state.hotSearchState;
	});

	return (
		<HeaderWapper>
			<Logo href="/">
				<img src={logoImg} alt="logo" />
			</Logo>
			<RightBtn write>
				<i className="iconfont icon-line-quillpenyumaobi" />
				写文章
			</RightBtn>
			<RightBtn>注册</RightBtn>

			<Container>
				<TopNav>
					<NavItem>
						<a href="/">
							<i className="iconfont icon-zhinanzhen" />
							首页
						</a>
					</NavItem>
					<NavItem>
						<a href="/download">
							<i className="iconfont icon-app4" />
							下载APP{myLoading ? 'true' : 'false'}
						</a>
					</NavItem>
					<NavItem>
						<CSSTransition
							in={focusedFromState}
							timeout={400}
							classNames={'slide'}
						>
							<NavSearch
								onFocus={handleFocus}
								onBlur={handleBlur}
								focused={focusedFromState}
							></NavSearch>
						</CSSTransition>
						<i className="iconfont icon-search" />
						{focusedFromState ? (
							<SearchInfo>
								<SearchInfoTitle>
									热门搜索
									<SearchInfoSwitch>换一批</SearchInfoSwitch>
								</SearchInfoTitle>
								<SearchList>
									{loading
										? 'loading....'
										: list.map((item, index) => (
												<SearchItem key={index}>{item.id}</SearchItem>
										  ))}
								</SearchList>
							</SearchInfo>
						) : null}
					</NavItem>
					<NavItem right>
						<a href="/login">
							<i className="iconfont icon-Aa" />
						</a>
					</NavItem>
					<NavItem>
						<a href="/login">登录</a>
					</NavItem>
				</TopNav>
			</Container>
		</HeaderWapper>
	);
};

export default Header;
