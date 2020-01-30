import * as consts from 'consts';
import styled, { css } from 'styled-components';

export const SearchBar = styled.input({
  backgroundColor: consts.ui.colors.bgWhite,
  color: consts.ui.colors.darkGray,
  border: 'none',
  padding: `15px 32px`,
  margin: `8px`,
  textAlign: `left`,
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: `${consts.ui.fontSizes.secondaryTitle}px`,
  width: 'auto'
});
