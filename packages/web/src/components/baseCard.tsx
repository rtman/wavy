import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  createStyles,
  GridListTile,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { BaseCardProps } from 'commonTypes';
import { Flex, Spacing } from 'components';
import React from 'react';
import { uuid } from 'uuidv4';

const width = 200;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    baseTypography: {
      maxWidth: `${width * 0.75}px`,
    },
    cardActions: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    menuButton: {
      minWidth: theme.spacing(1),
      paddingRight: 0,
      paddingLeft: 0,
      color: theme.palette.text.primary,
    },
    root: {
      padding: '1rem',
      maxWidth: `${width}px`,
    },
  })
);

export const BaseCard = (
  props: BaseCardProps & {
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }
) => {
  const classes = useStyles();

  const {
    caption,
    image,
    onClick,
    onClickOpenMenu,
    style,
    subtitle,
    title,
  } = props;

  return (
    <GridListTile key={uuid()}>
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
          <Flex
            justifyContent="space-between"
            alignItems="center"
            fullWidth={true}
          >
            <Flex flexDirection="column">
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
                <Typography noWrap={true} variant="caption">
                  {subtitle}
                </Typography>
              ) : null}
              {caption ? (
                <Typography noWrap={true} variant="overline">
                  {caption}
                </Typography>
              ) : null}
            </Flex>
            {onClickOpenMenu ? (
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
        </CardActions>
        <Spacing.BetweenComponents />
      </Card>
    </GridListTile>
  );
};
