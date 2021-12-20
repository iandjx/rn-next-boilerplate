/* tslint:disable */
/* eslint-disable */

import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import { GProps, SvgCss } from 'react-native-svg';
import { getIconColor } from './helper';
import { px } from '../helpers/normalize';

export interface SvgIconProps extends GProps, ViewProps {
  size?: number;
  width?: number | string;
  height?: number | string;
  color?: string | string[];
}

let IconDay: FC<SvgIconProps> = ({ size, width = size, height = size, color, ...rest }) => {
  const xml = `
<svg t="1638447565369" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3254" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M478.634667 811.349333a304.490667 304.490667 0 0 0 64.021333 0.277334v124.330666h-64v-124.608z m267.776-110.229333l87.594666 87.637333-45.226666 45.248-87.658667-87.594666c16.64-13.44 31.829333-28.629333 45.290667-45.290667z m-469.994667-1.493333c13.333333 16.746667 28.416 32 44.970667 45.568L232.533333 834.005333l-45.248-45.226666 89.130667-89.130667zM512 261.034667c138.602667 0 250.986667 112.384 250.986667 250.986666 0 138.602667-112.384 250.986667-250.986667 250.986667-138.602667 0-250.986667-112.384-250.986667-250.986667 0-138.602667 112.384-250.986667 250.986667-250.986666z m0 64a186.986667 186.986667 0 1 0 0 373.973333 186.986667 186.986667 0 0 0 0-373.973333z m423.957333 153.642666v64h-124.330666a304.725333 304.725333 0 0 0-0.277334-64h124.608z m-723.306666 0a304.490667 304.490667 0 0 0-0.277334 64H85.333333v-64h127.317334zM232.533333 187.264l90.346667 90.304c-16.64 13.44-31.829333 28.629333-45.290667 45.290667L187.306667 232.533333l45.226666-45.248z m556.224 0l45.248 45.226667-88.810666 88.874666a302.997333 302.997333 0 0 0-45.546667-44.970666l89.109333-89.130667zM542.656 85.333333v127.04a304.725333 304.725333 0 0 0-64 0.277334V85.333333h64z" fill="${getIconColor(color, 0, '#999999')}" p-id="3255"></path></svg>
`

  return (
    <SvgCss xml={xml}  width={width} height={height} {...rest} />
  );
};

IconDay.defaultProps = {
  size: px(20),
};

IconDay = React.memo ? React.memo(IconDay) : IconDay;

export default IconDay;
