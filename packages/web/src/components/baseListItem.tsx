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
import { BaseListItemProps, MenuPosition } from 'commonTypes';
import React, { useCallback } from 'react';

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
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    menuItems?: JSX.Element;
    anchorEl: HTMLElement | null;
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    setMenuPosition: React.Dispatch<React.SetStateAction<MenuPosition | null>>;
  }
) => {
  const classes = useStyles();

  const {
    anchorEl,
    caption,
    leftAccessory,
    menuItems,
    onClick,
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
    []
  );

  const onMenuClose = useCallback(() => setAnchorEl(null), []);

  return (
    <>
      <ListItem
        button={true}
        onClick={onClick}
        style={style}
        alignItems="flex-start"
        dense={true}
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

        <ListItemSecondaryAction>
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
