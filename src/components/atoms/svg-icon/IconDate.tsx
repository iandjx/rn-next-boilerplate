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

let IconDate: FC<SvgIconProps> = ({ size, width = size, height = size, color, ...rest }) => {
  const xml = `
<svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.34265 9.4043C2.34265 8.99008 2.67844 8.6543 3.09265 8.6543H20.9166C21.3308 8.6543 21.6666 8.99008 21.6666 9.4043C21.6666 9.81851 21.3308 10.1543 20.9166 10.1543H3.09265C2.67844 10.1543 2.34265 9.81851 2.34265 9.4043Z" fill="${getIconColor(color, 0, '#999999')}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6921 13.3096C15.6921 12.8954 16.0279 12.5596 16.4421 12.5596H16.4513C16.8656 12.5596 17.2013 12.8954 17.2013 13.3096C17.2013 13.7238 16.8656 14.0596 16.4513 14.0596H16.4421C16.0279 14.0596 15.6921 13.7238 15.6921 13.3096Z" fill="${getIconColor(color, 1, '#999999')}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2546 13.3096C11.2546 12.8954 11.5904 12.5596 12.0046 12.5596H12.0139C12.4281 12.5596 12.7639 12.8954 12.7639 13.3096C12.7639 13.7238 12.4281 14.0596 12.0139 14.0596H12.0046C11.5904 14.0596 11.2546 13.7238 11.2546 13.3096Z" fill="${getIconColor(color, 2, '#999999')}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.80789 13.3096C6.80789 12.8954 7.14368 12.5596 7.55789 12.5596H7.56716C7.98137 12.5596 8.31716 12.8954 8.31716 13.3096C8.31716 13.7238 7.98137 14.0596 7.56716 14.0596H7.55789C7.14368 14.0596 6.80789 13.7238 6.80789 13.3096Z" fill="${getIconColor(color, 3, '#999999')}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6921 17.1963C15.6921 16.7821 16.0279 16.4463 16.4421 16.4463H16.4513C16.8656 16.4463 17.2013 16.7821 17.2013 17.1963C17.2013 17.6105 16.8656 17.9463 16.4513 17.9463H16.4421C16.0279 17.9463 15.6921 17.6105 15.6921 17.1963Z" fill="${getIconColor(color, 4, '#999999')}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2546 17.1963C11.2546 16.7821 11.5904 16.4463 12.0046 16.4463H12.0139C12.4281 16.4463 12.7639 16.7821 12.7639 17.1963C12.7639 17.6105 12.4281 17.9463 12.0139 17.9463H12.0046C11.5904 17.9463 11.2546 17.6105 11.2546 17.1963Z" fill="${getIconColor(color, 5, '#999999')}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.80789 17.1963C6.80789 16.7821 7.14368 16.4463 7.55789 16.4463H7.56716C7.98137 16.4463 8.31716 16.7821 8.31716 17.1963C8.31716 17.6105 7.98137 17.9463 7.56716 17.9463H7.55789C7.14368 17.9463 6.80789 17.6105 6.80789 17.1963Z" fill="${getIconColor(color, 6, '#999999')}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0437 1.25C16.4579 1.25 16.7937 1.58579 16.7937 2V5.29078C16.7937 5.70499 16.4579 6.04078 16.0437 6.04078C15.6295 6.04078 15.2937 5.70499 15.2937 5.29078V2C15.2937 1.58579 15.6295 1.25 16.0437 1.25Z" fill="${getIconColor(color, 7, '#999999')}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.96552 1.25C8.37973 1.25 8.71552 1.58579 8.71552 2V5.29078C8.71552 5.70499 8.37973 6.04078 7.96552 6.04078C7.5513 6.04078 7.21552 5.70499 7.21552 5.29078V2C7.21552 1.58579 7.5513 1.25 7.96552 1.25Z" fill="${getIconColor(color, 8, '#999999')}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.76749 4.22937C4.76914 3.2772 6.16751 2.8291 7.77096 2.8291H16.2383C17.8457 2.8291 19.2449 3.27686 20.2448 4.23009C21.2504 5.18867 21.7548 6.56549 21.75 8.22317V17.3474C21.75 19.0051 21.243 20.3834 20.2371 21.3438C19.2366 22.2991 17.8377 22.7499 16.229 22.7499H7.77096C6.16301 22.7499 4.76302 22.2898 3.76225 21.3198C2.75774 20.3462 2.25 18.9507 2.25 17.2718V8.22213C2.25 6.5633 2.76004 5.18705 3.76749 4.22937ZM4.80096 5.31654C4.1571 5.9286 3.75 6.87387 3.75 8.22213V17.2718C3.75 18.6472 4.1594 19.6158 4.8062 20.2427C5.45673 20.8732 6.44222 21.2499 7.77096 21.2499H16.229C17.5663 21.2499 18.5528 20.878 19.2013 20.2589C19.8444 19.6448 20.25 18.6968 20.25 17.3474V8.22213L20.25 8.21982C20.2541 6.87097 19.8507 5.92673 19.2098 5.31582C18.5631 4.69931 17.5768 4.3291 16.2383 4.3291H7.77096C6.43772 4.3291 5.45061 4.69897 4.80096 5.31654Z" fill="${getIconColor(color, 9, '#999999')}"/>
</svg>
`

  return (
    <SvgXml xml={xml}  width={width} height={height} {...rest} />
  );
};

IconDate.defaultProps = {
  size: px(20),
};

IconDate = React.memo ? React.memo(IconDate) : IconDate;

export default IconDate;
