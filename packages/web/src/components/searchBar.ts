import * as consts from 'consts';
import styled from 'styled-components';

export const SearchBar = styled.input({
  backgroundColor: consts.ui.colors.bgWhite,
  color: consts.ui.colors.darkGray,
  border: '1px solid black',
  padding: '15px 32px',
  margin: '8px',
  textAlign: 'left',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: `${consts.ui.fontSizes.secondaryTitle}px`,
  width: '70%',
  '@media(max-width: 600px)': {
    width: '100%',
  },
});
