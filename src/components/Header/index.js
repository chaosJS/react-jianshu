import { Link } from 'react-router-dom';
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
import BaseContainer from '@/components/BaseContainer';
import { CSSTransition } from 'react-transition-group';
// use redux state
import { useSelector, useDispatch } from 'react-redux';
import {
	inputFocused,
	inputBlur,
	mouseEnter,
	mouseLeave,
} from '../../store/focusSlice';
import { nextPage } from '../../store/hotSearch';
import { logout } from '../../store/loginSlice';

import { fetchPostById } from '../../services/posts';
import {
	// useEffect,

	useRef,
	useState,
} from 'react';
const Header = () => {
	// const [focused, setFocused] = useState(false);
	// const [myLoading, setMyLoading] = useState(false);
	const dispatch = useDispatch();
	const spinRef = useRef(null);
	const [spinDeg, setSpinDeg] = useState(360);
	const handleFocus = () => {
		// setFocused(true);

		// setMyLoading(true);
		!showWords.length &&
			dispatch(fetchPostById(1)).then(() => {
				// setMyLoading(false);
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
	const mouseIn = useSelector((state) => {
		return state.focusState.mouseIn;
	});
	const {
		// list,
		loading,
		// error,
		showWords,
	} = useSelector((state) => {
		return state.hotSearchState;
	});

	const { isLogin } = useSelector((state) => {
		return state.loginDataFromState;
	});

	const handleLogout = () => {
		dispatch(logout());
	};
	return (
		<HeaderWapper>
			<Logo href="/">
				<img src={logoImg} alt="logo" />
			</Logo>
			<RightBtn write>
				<Link to="/write">
					<i className="iconfont icon-line-quillpenyumaobi" />
					写文章
				</Link>
			</RightBtn>
			<RightBtn>
				<Link to="/login">注册</Link>
			</RightBtn>
			<BaseContainer>
				<TopNav>
					<NavItem>
						<Link to="/">
							<i className="iconfont icon-zhinanzhen" />
							首页
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/blog">
							<i className="iconfont icon-app4" />
							BLOG
						</Link>
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
						{!!(focusedFromState || mouseIn) ? (
							<SearchInfo
								onMouseEnter={() => {
									dispatch(mouseEnter());
								}}
								onMouseLeave={() => {
									dispatch(mouseLeave());
								}}
							>
								<SearchInfoTitle>
									热门搜索
									<SearchInfoSwitch
										onClick={() => {
											dispatch(nextPage());
											spinRef.current.style.transform = `rotate(${spinDeg}deg)`;
											setSpinDeg((ss) => {
												return spinDeg + 360;
											});
										}}
									>
										<i ref={spinRef} className="iconfont icon-huanyipi" />
										换一批
									</SearchInfoSwitch>
								</SearchInfoTitle>
								<SearchList>
									{loading
										? 'loading....'
										: showWords.map((item, index) => (
												<SearchItem key={index}>{item}</SearchItem>
										  ))}
								</SearchList>
							</SearchInfo>
						) : null}
					</NavItem>
					<NavItem right>
						<Link to="/login">
							<i className="iconfont icon-Aa" />
						</Link>
					</NavItem>
					<NavItem>
						{isLogin ? (
							<span onClick={handleLogout}>退出</span>
						) : (
							<Link to="/login">{'登录'}</Link>
						)}
					</NavItem>
				</TopNav>
			</BaseContainer>
		</HeaderWapper>
	);
};

export default Header;
