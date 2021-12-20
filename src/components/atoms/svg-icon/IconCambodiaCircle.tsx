/* tslint:disable */
/* eslint-disable */

import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import { GProps, SvgXml } from 'react-native-svg';
import { px } from '../helpers/normalize';
import { getIconColor } from './helper';

export interface SvgIconProps extends GProps, ViewProps {
  size?: number;
  width?: number | string;
  height?: number | string;
  color?: string | string[];
}

let IconCambodiaCircle: FC<SvgIconProps> = ({ size, width = size, height = size, color, ...rest }) => {
  const xml = `
<svg t="1639997483809" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="920" width="200" height="200"><path d="M56.83264 277.333333h910.336A509.802667 509.802667 0 0 1 1024.00064 512c0 84.586667-20.501333 164.373333-56.832 234.666667H56.83264A509.802667 509.802667 0 0 1 0.00064 512c0-84.586667 20.501333-164.373333 56.832-234.666667z" fill="${getIconColor(
    color,
    0,
    'red'
  )}" p-id="921"></path><path d="M967.16864 277.333333H56.83264C141.931307 112.618667 313.813973 0 512.00064 0s370.069333 112.618667 455.168 277.333333zM56.83264 746.666667h910.336C882.069973 911.381333 710.187307 1024 512.00064 1024S141.931307 911.381333 56.83264 746.666667z" fill="${getIconColor(
    color,
    1,
    'blue'
  )}" p-id="922"></path><path d="M661.333973 576v106.666667h-138.666666v-106.666667H661.333973z m21.333334 0h42.666666l64 106.666667h-106.666666v-106.666667z m-181.333334 0v106.666667H362.667307v-106.666667h138.666666zM341.333973 576v106.666667h-106.666666l64-106.666667h42.666666zM298.667307 490.666667h426.666666v74.666666H298.667307z" fill="${getIconColor(
    color,
    2,
    '#999999'
  )}" p-id="923"></path><path d="M298.667307 469.333333c14.229333-42.666667 28.437333-64 42.666666-64s28.437333 21.333333 42.666667 64v42.666667h-85.333333v-42.666667zM640.00064 469.333333c14.229333-42.666667 28.437333-64 42.666667-64s28.437333 21.333333 42.666666 64v42.666667h-85.333333v-42.666667zM448.00064 469.333333c21.333333-85.333333 42.666667-128 64-128s42.666667 42.666667 64 128v42.666667h-128v-42.666667z" fill="${getIconColor(
    color,
    3,
    '#999999'
  )}" p-id="924"></path></svg>
`;

  return <SvgXml xml={xml} width={width} height={height} {...rest} />;
};

IconCambodiaCircle.defaultProps = {
  size: px(20),
};

IconCambodiaCircle = React.memo ? React.memo(IconCambodiaCircle) : IconCambodiaCircle;

export default IconCambodiaCircle;
