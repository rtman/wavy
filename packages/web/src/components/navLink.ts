import styled, { CSSObject } from 'styled-components';
import * as consts from 'consts';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)(
  (): CSSObject => ({
    fontSize: `${consts.ui.fontSizes.normal}px`,
    cursor: 'pointer',
    margin: '0px 8px',
    textDecoration: 'none',
    color: 'black',
  }),
  `&:hover {
        text-decoration: underline
    }`
);
