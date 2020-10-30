import { CSSProperties } from 'react';

export interface BaseCardProps {
  caption?: string;
  image?: string;
  onClickOpenMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  subtitle?: string;
  title?: string;
}
