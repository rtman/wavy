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

  const onClickGoToLabel = () => {
    history.push(`${consts.routes.LABEL}/${data.id}`);
    setAnchorEl(null);
  };

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  return (
    <BaseListItem
      onClick={onClick ?? onClickGoToLabel}
      setMenuPosition={setMenuPosition}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      menuItems={
        <LabelMenuItems
          data={data}
          menuPosition={menuPosition}
          closeMenu={closeMenu}
        />
      }
      {...props}
    />
  );
};
