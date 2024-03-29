import {
  createStyles,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Menu,
  Theme,
  Typography,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { Flex, Spacing } from 'components';
import React, { useCallback } from 'react';
import { BaseListItemProps, MenuPosition } from 'types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      minWidth: theme.spacing(1),
      color: theme.palette.text.primary,
    },
  })
);

export const BaseListItem = (
  props: BaseListItemProps & {
    anchorEl: HTMLElement | null;
    active?: boolean;
    menuItems?: JSX.Element;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    playCount?: number;
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    setMenuPosition: React.Dispatch<React.SetStateAction<MenuPosition | null>>;
  }
) => {
  const classes = useStyles();

  const {
    anchorEl,
    // active = true,
    caption,
    disabled,
    leftAccessory,
    menuItems,
    onClick,
    rightAccessory,
    // playCount,
    setAnchorEl,
    setMenuPosition,
    style,
    subtitle,
    title,
  } = props;

  const onClickOpenMenu = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      event.preventDefault();
      setMenuPosition({
        top: event.pageY,
        left: event.pageX,
      });
    },
    // TODO: test fixing this
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onMenuClose = useCallback(
    () => setAnchorEl(null),
    // TODO: test fixing this
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <ListItem
        button={true}
        onClick={onClick}
        style={style}
        alignItems="flex-start"
        dense={true}
        disabled={disabled ?? false}
      >
        {leftAccessory ? leftAccessory : null}
        <ListItemText
          primary={title}
          secondary={
            <>
              {subtitle ? (
                <Typography variant="body2">{subtitle}</Typography>
              ) : null}
              {caption ? (
                <Typography variant="caption">{caption}</Typography>
              ) : null}
            </>
          }
        />
        <Spacing.BetweenComponents />
        <ListItemSecondaryAction>
          <Flex>
            {rightAccessory ? rightAccessory : null}
            {menuItems !== undefined ? (
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={onClickOpenMenu}
                className={classes.menuButton}
              >
                <MoreVert />
              </IconButton>
            ) : null}
          </Flex>
        </ListItemSecondaryAction>
      </ListItem>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onMenuClose}
      >
        {menuItems}
      </Menu>
    </>
  );
};
