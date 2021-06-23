import { useSelector } from 'react-redux';
import { RecommendWrapper, DownloadWrapper } from '../style';
import { useMouseToggle } from '../../../hooks';
import downloadImg from '@static/images/recomIcon/download.png';
import DownAPP from './DownApp';
import { memo } from 'react';
const Recommend = () => {
	const recomList = useSelector((state) => state.topicList.recomList);

	const {
		isHover,
		mouseEnter,
		mouseLeave,
		// 两种方式都可以
		// bind
	} = useMouseToggle();
	return (
		<>
			<RecommendWrapper>
				{recomList.map((item) => (
					<a href={item.to} key={item.id}>
						<img src={item.imgUrl} alt={item.title} />
					</a>
				))}
			</RecommendWrapper>
			<DownloadWrapper
				onMouseEnter={mouseEnter}
				onMouseLeave={mouseLeave}
				// {...bind}
			>
				<div className="download-app">
					<img src={downloadImg} alt="downloadApp" />
				</div>
				<a className="content" href="/detail">
					<p className="title">下载简书手机App &gt; </p>
					<p className="desc">随时随地发现和创作内容</p>
				</a>
				{isHover ? <DownAPP></DownAPP> : null}
			</DownloadWrapper>
		</>
	);
};

// export default Recommend;
export default memo(Recommend);
