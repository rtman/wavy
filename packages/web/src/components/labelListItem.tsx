import { Label, MenuPosition } from 'commonTypes';
import { BaseListItemProps } from 'commonTypes';
import { BaseListItem } from 'components';
import * as consts from 'consts';
import React, { CSSProperties, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { LabelMenuItems } from './labelMenuItems';

interface LabelListItemProps
  extends Omit<BaseListItemProps, 'onClickOpenMenu'> {
  data: Label;
  onClick?: () => void;
  style?: CSSProperties;
}

export const LabelListItem = (props: LabelListItemProps) => {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;

  const onClickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  const onClickGoToLabel = () => {
    history.push(`${consts.routes.LABEL}/${data.id}`);
    setAnchorEl(null);
  };

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  return (
    <>
      <BaseListItem
        onClick={onClick ?? onClickGoToLabel}
        onClickOpenMenu={onClickOpenMenu}
        {...props}
      />
      <LabelMenuItems
        data={data}
        // anchorEl={anchorEl}
        menuPosition={menuPosition}
        closeMenu={closeMenu}
        // setAnchorEl={setAnchorEl}
      />
    </>
  );
};
