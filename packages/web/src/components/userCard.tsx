import { BaseCardProps, MenuPosition, User } from 'commonTypes';
import { PlayerContext } from 'context';
import React, { CSSProperties, useContext, useState } from 'react';

import { BaseCard } from './baseCard';
import { UserUtils } from './userUtils';

interface UserCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: User;
  onClick?: () => void;
  style?: CSSProperties;
}

export const UserCard = (props: UserCardProps) => {
  const playerContext = useContext(PlayerContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;

  const onClickGoToUser = () => {
    // TODO: implement when user screen is available
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
        onClick={onClick ?? onClickGoToUser}
        onClickOpenMenu={onClickOpenMenu}
        {...props}
      />
      <UserUtils
        data={data}
        anchorEl={anchorEl}
        menuPosition={menuPosition}
        setAnchorEl={setAnchorEl}
      />
    </>
  );
};
