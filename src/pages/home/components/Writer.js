import { AuthorListWrapper, AuthorList } from '../style';
import { nFormatter } from '../../../utils';
import { memo } from 'react';
const Writer = (props) => {
	const { list, loading } = props;
	return (
		<AuthorListWrapper>
			<p className="title">
				<span>推荐作者</span>
				<span style={{ marginLeft: 'auto' }}>
					<i className="iconfont icon-huanyipi" />
					换一批
				</span>
			</p>
			{loading ? (
				'loading...'
			) : (
				<AuthorList>
					{list.map((item) => (
						<li key={item.id}>
							<img src={item.avatar_source} alt={item.nickname} />
							<div className="info">
								<p className="name">
									{item.nickname}
									<span>+ 关注</span>
								</p>
								<p className="desc">
									写了{nFormatter(item.total_wordage, 1)}字 ·{' '}
									{nFormatter(item.total_likes_count, 1)}喜欢
								</p>
							</div>
						</li>
					))}
				</AuthorList>
			)}
		</AuthorListWrapper>
	);
};

// export default Writer;
export default memo(Writer);
