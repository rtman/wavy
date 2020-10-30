import { BaseCardProps, Label, MenuPosition } from 'commonTypes';
import * as consts from 'consts';
import React, { CSSProperties, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { BaseCard } from './baseCard';
import { LabelUtils } from './labelUtils';

interface LabelCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: Label;
  onClick?: () => void;
  style?: CSSProperties;
}

export const LabelCard = (props: LabelCardProps) => {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;

  const onClickGoToLabel = () => {
    history.push(`${consts.routes.LABEL}/${data.id}`);
    setAnchorEl(null);
  };

  const onClickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  return (
    <>
      <BaseCard
        onClick={onClick ?? onClickGoToLabel}
        onClickOpenMenu={onClickOpenMenu}
        {...props}
      />
      <LabelUtils
        data={data}
        anchorEl={anchorEl}
        menuPosition={menuPosition}
        setAnchorEl={setAnchorEl}
      />
    </>
  );
};
