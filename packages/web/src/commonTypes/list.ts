import { CSSProperties } from 'react';

export interface BaseListItemProps {
  caption?: string;
  leftAccessory?: JSX.Element;
  onClickOpenMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  subtitle?: string;
  title?: string;
}
