import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  createStyles,
  IconButton,
  makeStyles,
  Menu,
  Theme,
  Typography,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { BaseCardProps, MenuPosition } from 'commonTypes';
import { Flex, Spacing } from 'components';
import React, { memo, useCallback } from 'react';

const defaultWidth = 200;

const useStyles = makeStyles((props: Theme & { width: number }) =>
  createStyles({
    baseTypography: {
      maxWidth: '100%',
    },
    cardActions: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    menuButton: {
      minWidth: props.spacing(1),
      paddingRight: 0,
      paddingLeft: 0,
      color: props.palette.text.primary,
    },
    root: {
      padding: '1rem',
      width: `${props.width ?? defaultWidth}px`,
    },
  })
);

export const BaseCard = memo(
  (
    props: BaseCardProps & {
      onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
      menuItems?: JSX.Element;
      anchorEl: HTMLElement | null;
      setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
      setMenuPosition: React.Dispatch<
        React.SetStateAction<MenuPosition | null>
      >;
    }
  ) => {
    const {
      // anchorEl,
      // setAnchorEl,
      caption,
      image,
      // menuItems,
      onClick,
      // setMenuPosition,
      style,
      subtitle,
      title,
      width,
    } = props;

    const classes = useStyles(width);

    // const onClickOpenMenu = useCallback(
    //   (event: React.MouseEvent<HTMLButtonElement>) => {
    //     setAnchorEl(event.currentTarget);
    //     event.preventDefault();
    //     setMenuPosition({
    //       top: event.pageY,
    //       left: event.pageX,
    //     });
    //   },
    //   []
    // );

    // const onMenuClose = useCallback(() => setAnchorEl(null), []);

    return (
      <Flex>
        <Card className={classes.root} style={style}>
          <CardActionArea>
            {image ? (
              <CardMedia
                onClick={onClick}
                component="img"
                image={image}
                alt={title}
              />
            ) : null}
          </CardActionArea>
          {/* <Spacing.BetweenComponents /> */}
          <CardActions disableSpacing={true} className={classes.cardActions}>
            {/* <Flex
              justifyContent="space-between"
              alignItems="center"
              fullWidth={true}
            > */}
            <Flex flexDirection="column" fullWidth={true}>
              {title ? (
                <Typography
                  className={classes.baseTypography}
                  noWrap={true}
                  variant="body2"
                >
                  {title}
                </Typography>
              ) : null}
              {subtitle ? (
                <Typography
                  className={classes.baseTypography}
                  noWrap={true}
                  variant="caption"
                >
                  {subtitle}
                </Typography>
              ) : null}
              {caption ? (
                <Typography
                  className={classes.baseTypography}
                  noWrap={true}
                  variant="overline"
                >
                  {caption}
                </Typography>
              ) : null}
            </Flex>
            {/* 
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={onClickOpenMenu}
                className={classes.menuButton}
              >
                <MoreVert />
              </IconButton> */}
            {/* </Flex> */}
          </CardActions>
        </Card>
        {/* <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={onMenuClose}
        >
          {menuItems}
        </Menu> */}
      </Flex>
    );
  }
);

BaseCard.displayName = 'BaseCard';
