/* tslint:disable */
/* eslint-disable */

import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import { GProps, SvgXml } from 'react-native-svg';
import { getIconColor } from './helper';
import { px } from '../helpers/normalize';

export interface SvgIconProps extends GProps, ViewProps {
  size?: number;
  width?: number | string;
  height?: number | string;
  color?: string | string[];
}

let IconBells: FC<SvgIconProps> = ({ size, width = size, height = size, color, ...rest }) => {
  const xml = `
<svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.10087 7.4947C6.04619 8.12236 6.04571 8.76474 6.04571 9.43598C6.04571 9.48719 6.04047 9.53827 6.03006 9.58842C5.82754 10.564 5.36706 11.4681 4.69707 12.2105C4.43131 12.6259 4.27805 13.0998 4.25083 13.5878V13.7871L4.25065 13.8032C4.23617 14.4778 4.46335 15.1375 4.89505 15.6674C5.51797 16.3056 6.35615 16.706 7.25858 16.7918L7.26762 16.7927L7.26762 16.7927C10.4099 17.1298 13.5802 17.1298 16.7224 16.7927L16.7344 16.7914L16.7344 16.7915C17.6375 16.7093 18.4764 16.308 19.0961 15.6664C19.5354 15.1376 19.766 14.4743 19.7491 13.7963L19.7489 13.7776V13.586C19.7242 13.1016 19.5711 12.631 19.3037 12.2208C18.6354 11.4737 18.1751 10.5673 17.97 9.59004C17.9631 9.55719 17.9584 9.52391 17.956 9.49042C17.9306 9.14215 17.932 8.79495 17.9332 8.48039C17.9333 8.46309 17.9333 8.44589 17.9334 8.42879C17.9346 8.09141 17.9341 7.78927 17.9087 7.4958C17.6426 4.76888 14.8891 2.75 12.0387 2.75H11.9611C9.10946 2.75 6.35777 4.76959 6.10087 7.4947ZM4.6072 7.35703C4.95318 3.66609 8.54591 1.25 11.9611 1.25H12.0387C15.4546 1.25 19.0451 3.66625 19.402 7.35479L19.4027 7.36176L19.4027 7.36177C19.4351 7.73367 19.4346 8.1017 19.4334 8.43421L19.4333 8.4672C19.4321 8.77778 19.4311 9.05746 19.4486 9.33068C19.6073 10.0442 19.9521 10.7068 20.4512 11.2534C20.4756 11.2801 20.498 11.3086 20.5183 11.3385C20.96 11.9905 21.2128 12.7497 21.2481 13.5344C21.2486 13.5456 21.2489 13.5569 21.2489 13.5681V13.7687C21.2727 14.8207 20.9091 15.844 20.228 16.6511C20.2182 16.6627 20.208 16.674 20.1975 16.685C19.3245 17.6004 18.1428 18.1681 16.8766 18.2848C13.6313 18.6325 10.3572 18.6324 7.11194 18.2846C5.84852 18.1634 4.66977 17.5973 3.7946 16.6873C3.78197 16.6741 3.76982 16.6605 3.75818 16.6465C3.08842 15.8399 2.73043 14.8239 2.75083 13.7794V13.5681C2.75083 13.5557 2.75113 13.5434 2.75175 13.531C2.79062 12.7471 3.04185 11.9886 3.47823 11.3337C3.50011 11.3009 3.52455 11.2698 3.55132 11.2408C4.04504 10.7061 4.38701 10.0562 4.54572 9.35566C4.54578 8.71786 4.54772 8.03783 4.60677 7.36177L4.60719 7.35703L4.6072 7.35703Z" fill="${getIconColor(color, 0, '#999999')}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.08759 20.265C9.41155 20.0069 9.88342 20.0603 10.1415 20.3842C10.516 20.8543 11.0689 21.1618 11.6799 21.2337C12.291 21.3056 12.9043 21.1351 13.3838 20.7634L13.3949 20.7548L13.395 20.7549C13.5402 20.6467 13.6704 20.5212 13.7828 20.3815C14.0424 20.0587 14.5146 20.0076 14.8373 20.2672C15.16 20.5269 15.2112 20.999 14.9515 21.3217C14.7609 21.5586 14.541 21.7708 14.2972 21.9533C13.5053 22.5647 12.5008 22.8406 11.5046 22.7234C10.5059 22.6059 9.5924 22.1022 8.96834 21.3189C8.71023 20.995 8.76362 20.5231 9.08759 20.265Z" fill="${getIconColor(color, 1, '#999999')}"/>
</svg>
`

  return (
    <SvgXml xml={xml}  width={width} height={height} {...rest} />
  );
};

IconBells.defaultProps = {
  size: px(20),
};

IconBells = React.memo ? React.memo(IconBells) : IconBells;

export default IconBells;
