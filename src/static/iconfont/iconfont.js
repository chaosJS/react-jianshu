import { createGlobalStyle } from 'styled-components';
import Eot from './iconfont.eot?t=1623923244573';
import EotIEFix from './iconfont.eot?t=1623923244573#iefix';
import Woff2 from './iconfont.woff2?t=1623923244573';
import Woff from './iconfont.woff?t=1623923244573';
import Ttf from './iconfont.ttf?t=1623923244573';
import Svg from './iconfont.svg?t=1623923244573#iconfont';

const GlobalIconStyle = createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 2617113 */
  src: url(${Eot}); /* IE9 */
  src: url(${EotIEFix}) format('embedded-opentype'), /* IE6-IE8 */
       url(${Woff2}) format('woff2'),
       url(${Woff}) format('woff'),
       url(${Ttf}) format('truetype'),
       url(${Svg}) format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-app4:before {
  content: "\\e6f4";
}

.icon-Aa:before {
  content: "\\e636";
}

.icon-zhinanzhen:before {
  content: "\\e651";
}

.icon-line-quillpenyumaobi:before {
  content: "\\e6eb";
}


`;
export default GlobalIconStyle;
