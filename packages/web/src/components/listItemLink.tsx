import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';

export const ListItemLink = (props: LinkProps) => {
  return <ListItem button component={Link} {...props} />;
};
