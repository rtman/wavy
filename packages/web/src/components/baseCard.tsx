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
import { ArrowUpward, MoreVert, PlayArrow } from '@material-ui/icons';
import { BaseCardProps, MenuPosition } from 'commonTypes';
import { Flex, Spacing } from 'components';
import React, { memo, useCallback, useState } from 'react';

const defaultWidth = 200;

const useStyles = makeStyles((props: Theme & { width: number }) =>
  createStyles({
    baseTypography: {
      maxWidth: '100%',
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
      },
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
      onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => void;
      onClickCaption?: (
        event: React.MouseEvent<HTMLSpanElement, MouseEvent>
      ) => void;
      onClickPlay?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => void;
      onClickSubtitle?: (
        event: React.MouseEvent<HTMLSpanElement, MouseEvent>
      ) => void;
      onClickTitle?: (
        event: React.MouseEvent<HTMLSpanElement, MouseEvent>
      ) => void;
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
      onClickCaption,
      onClickPlay,
      onClickSubtitle,
      onClickTitle,
      // setMenuPosition,
      style,
      subtitle,
      title,
      width,
    } = props;

    const classes = useStyles(width);

    const [isHoveringCard, setIsHoveringCard] = useState<boolean>(false);

    const onMouseEnter = () => setIsHoveringCard(true);
    const onMouseLeave = () => setIsHoveringCard(false);

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
          <CardActionArea
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {image ? (
              <>
                <CardMedia
                  onClick={onClick as any}
                  component="img"
                  image={image}
                  alt={title}
                />
                {isHoveringCard ? (
                  <>
                    <div
                      style={{
                        display: 'flex',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        left: 0,
                        top: 0,
                        backgroundColor: 'black',
                        opacity: 0.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 999,
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        left: 0,
                        top: 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 999,
                      }}
                    >
                      <IconButton onClick={onClick}>
                        <ArrowUpward fontSize="large" />
                      </IconButton>
                      <IconButton onClick={onClickPlay}>
                        <PlayArrow fontSize="large" />
                      </IconButton>
                    </div>
                  </>
                ) : null}
              </>
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
                  onClick={onClickTitle}
                  className={classes.baseTypography}
                  noWrap={true}
                  variant="body2"
                >
                  {title}
                </Typography>
              ) : null}
              {subtitle ? (
                <Typography
                  onClick={onClickSubtitle}
                  className={classes.baseTypography}
                  noWrap={true}
                  variant="caption"
                >
                  {subtitle}
                </Typography>
              ) : null}
              {caption ? (
                <Typography
                  onClick={onClickCaption}
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
