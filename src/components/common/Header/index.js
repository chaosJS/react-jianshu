import { HeaderWapper, Logo, TopNav, NavItem, RightBtn } from './styles';
import logoImg from '@static/images/logo.png';
import { Container } from '@/commonStyle';

const Header = () => {
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
							下载APP
						</a>
					</NavItem>
					<NavItem>
						<a href="/download">
							<i className="iconfont icon-search" />
						</a>
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
