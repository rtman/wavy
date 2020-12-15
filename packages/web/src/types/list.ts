import { CSSProperties } from 'react';

export interface BaseListItemProps {
  caption?: string;
  disabled?: boolean;
  leftAccessory?: JSX.Element;
  onClickOpenMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  rightAccessory?: JSX.Element;
  style?: CSSProperties;
  subtitle?: string;
  title?: string;
}
