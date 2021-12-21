import React, { ReactNode } from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import { useTailwind } from '_app/store/useTailwind';

type IImage = {
  children?: ReactNode;
  className?: string;
  src?: string;
  style?: FastImageProps['style'];
} & Partial<FastImageProps>;

const Image = ({ children, className = '', src, source, style, ...rest }: IImage) => {
  const { tw } = useTailwind();
  return (
    <FastImage
      source={{ uri: src, ...(source as any) }}
      style={[tw.style(`w-full h-full ${className}`), style]}
      {...rest}
    >
      {children}
    </FastImage>
  );
};

export default Image;
