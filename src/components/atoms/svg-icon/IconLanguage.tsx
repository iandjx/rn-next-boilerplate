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

let IconLanguage: FC<SvgIconProps> = ({ size, width = size, height = size, color, ...rest }) => {
  const xml = `
<svg t="1634294995680" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4477" width="200" height="200">
      <path fill="${getIconColor(color, 0, '#999999')}" d="M799.488 900.448 159.936 900.448c-52.928 0-96-43.072-96-96L63.936 225.952c0-52.928 43.072-96 96-96l642.496 0c52.928 0 96 43.072 96 96L898.432 320c0 17.664-14.304 32-32 32s-32-14.336-32-32L834.432 225.952c0-17.632-14.336-32-32-32L159.936 193.952c-17.632 0-32 14.368-32 32l0 578.496c0 17.664 14.368 32 32 32l639.552 0c17.664 0 32-14.336 32-32l0-98.944c0-17.696 14.304-32 32-32s32 14.304 32 32l0 98.944C895.488 857.376 852.448 900.448 799.488 900.448zM661.472 514.112m-31.328 0a0.979 0.979 0 1 0 62.656 0 0.979 0.979 0 1 0-62.656 0ZM896 640 576 640c-35.296 0-64-28.704-64-64l0-128c0-35.296 28.704-64 64-64l320 0c35.296 0 64 28.704 64 64l0 128C960 611.296 931.296 640 896 640zM576 448l0 128 320.064 0L896 448 576 448z" p-id="4478"></path>
</svg>
`

  return (
    <SvgXml xml={xml}  width={width} height={height} {...rest} />
  );
};

IconLanguage.defaultProps = {
  size: px(20),
};

IconLanguage = React.memo ? React.memo(IconLanguage) : IconLanguage;

export default IconLanguage;
