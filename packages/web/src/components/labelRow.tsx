import { useLazyQuery } from '@apollo/react-hooks';
import {
  Avatar,
  ButtonBase,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { StyledButton, StyledListItemText } from 'components';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Label, Query, QueryLabelByIdArgs } from 'types';

interface LabelRowProps {
  label: Label;
  passedOnClickLabel?: (label: Label) => void;
}

export const LabelRow = (props: LabelRowProps) => {
  const { label, passedOnClickLabel } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const playerContext = useContext(PlayerContext);
  const history = useHistory();
  const location = useLocation();

  const [
    getLabelById,
    { loading: queryLoading, data: queryData },
  ] = useLazyQuery<Pick<Query, 'labelById'>, QueryLabelByIdArgs>(
    consts.queries.LABEL_BY_ID
  );

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickPlayNow = () => {
    getLabelById({ variables: { id: label.id } });
    handleMenuClose();
  };

  const labelImageUrl = label.imageUrl ?? '';
  const labelName = label.name ?? '';
  const labelDescription = label.description ?? '';
  const labelId = label.id ?? '';

  const labelSongs = queryData?.labelById?.songs ?? [];

  useEffect(() => {
    if (!queryLoading && labelSongs) {
      playerContext?.replaceQueueWithSongs(labelSongs);
    }
    // TODO: Re enable and fix deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryLoading, queryData]);
  // }, [queryLoading, queryData, playerContext]);

  const onClickGoToLabel = () => {
    history.push(`${consts.routes.LABEL}/${labelId}`);
    handleMenuClose();
  };

  const resolvedOnClick =
    typeof passedOnClickLabel === 'function'
      ? passedOnClickLabel
      : handleClickPlayNow;

  // console.log('location', location);
  // console.log('song', song);

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <ButtonBase onClick={() => resolvedOnClick(label)}>
            <Avatar variant="square" src={labelImageUrl} />
          </ButtonBase>
        </ListItemAvatar>
        {/* <StyledButton onClick={() => onClickGoToArtist(song)}> */}
        <StyledListItemText
          primary={labelName}
          secondary={labelDescription}
          // onClick={secondaryStyle ? () => onClickSong() : () => onClickGoToArtist()}
        />
        {/* </StyledButton> */}
        <ListItemSecondaryAction>
          <StyledButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            <MoreVert />
          </StyledButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {location.pathname.includes('dashboard') ? null : (
          <MenuItem onClick={handleClickPlayNow}>Play Now</MenuItem>
        )}
        <MenuItem onClick={onClickGoToLabel}>Go to Label</MenuItem>
      </Menu>
    </>
  );
};
