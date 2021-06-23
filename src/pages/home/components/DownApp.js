import { HoverDownloadWrapper } from '../style';
import downloadImg from '@static/images/recomIcon/download.png';

const DownApp = () => {
	return (
		<HoverDownloadWrapper>
			<img src={downloadImg} alt="hover-img" />
		</HoverDownloadWrapper>
	);
};

export default DownApp;
