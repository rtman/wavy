import {
  createStyles,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { CustomListItemProps } from 'commonTypes';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      minWidth: theme.spacing(1),
      color: theme.palette.text.primary,
    },
  })
);

export const CustomListItem = (
  props: CustomListItemProps & {
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }
) => {
  const classes = useStyles();

  const {
    caption,
    leftAccessory,
    onClick,
    onClickOpenMenu,
    style,
    subtitle,
    title,
  } = props;

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
        {onClickOpenMenu ? (
          <ListItemSecondaryAction>
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={onClickOpenMenu}
              className={classes.menuButton}
            >
              <MoreVert />
            </IconButton>
          </ListItemSecondaryAction>
        ) : null}
      </ListItem>
    </>
  );
};
