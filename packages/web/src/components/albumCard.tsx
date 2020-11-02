import { Album, BaseCardProps, MenuPosition } from 'commonTypes';
import { BaseCard } from 'components';
import { PlayerContext } from 'context';
import React, {
  CSSProperties,
  memo,
  useCallback,
  useContext,
  useState,
} from 'react';

import { AlbumMenuItems } from './albumMenuItems';

interface AlbumCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: Album;
  onClick?: () => void;
  style?: CSSProperties;
}

export const AlbumCard = memo((props: AlbumCardProps) => {
  const playerContext = useContext(PlayerContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;

  const onClickPlay = useCallback(() => {
    playerContext?.replaceQueueWithSongs(data.songs ?? []);
  }, []);

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  return (
    <BaseCard
      onClick={onClick ?? onClickPlay}
      setMenuPosition={setMenuPosition}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      menuItems={
        <AlbumMenuItems
          data={data}
          menuPosition={menuPosition}
          closeMenu={closeMenu}
        />
      }
      {...props}
    />
  );
});
