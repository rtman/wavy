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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      minWidth: theme.spacing(1),
      color: theme.palette.text.primary,
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
    <GridListTile>
      <Card style={style}>
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
        <Spacing.BetweenComponents />
        <CardActions>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            fullWidth={true}
          >
            <Flex>
              {title ? <Typography variant="body1"> {title}</Typography> : null}
              {subtitle ? (
                <Typography variant="body2">{subtitle}</Typography>
              ) : null}
              {caption ? (
                <Typography variant="caption">{caption}</Typography>
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
