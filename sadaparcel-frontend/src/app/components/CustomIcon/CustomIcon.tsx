import React from 'react';

import * as Icon from 'react-feather';

interface Props {
  color?: string;
  fillColor?: string;
  size?: 'small' | 'large';
  style?: string;
  name: string;
}

export default function CustomIcon({
  color = 'currentColor',
  name,
  size,
  style,
  fillColor,
}: Props) {
  const ComponentName = (Icon as any)[name];
  const sizeVariant = size === 'small' ? 16 : 20;
  const fillVariant = fillColor || 'none';
  const strokeWidth = name === 'Bold' ? 3 : 2;

  return (
    <ComponentName
      className={style}
      color={color}
      fill={fillVariant}
      size={sizeVariant}
      strokeWidth={strokeWidth}
    />
  );
}
